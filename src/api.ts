import { Blog } from './types';

// Listado de blogs
const blogs: Blog[] = [
  {
    id: '1',
    title: 'The Golden Spoon',
    description:
      'A fine dining experience with a menu that changes daily based on the freshest ingredients available.',
    address: '123 Main St. Anytown USA',
    score: 4.5,
    ratings: 100,
    image: 'https://picsum.photos/id/30/480/300',
  },
  {
    id: '2',
    title: 'La Piazza',
    description: 'Authentic Italian cuisine in a cozy atmosphere with outdoor seating available.',
    address: '456 Oak Ave. Anytown USA',
    score: 4.2,
    ratings: 80,
    image: 'https://picsum.photos/id/42/480/300',
  },
  {
    id: '3',
    title: 'The Sizzling Skillet',
    description:
      'A family-friendly blog with a wide variety of dishes. including vegetarian and gluten-free options.',
    address: '789 Elm St. Anytown USA',
    score: 4.8,
    ratings: 120,
    image: 'https://picsum.photos/id/163/480/300',
  },
  {
    id: '4',
    title: 'The Hungry Bear',
    description: 'A rustic cabin-style blog serving hearty portions of comfort food.',
    address: '101 Forest Rd. Anytown USA',
    score: 4.0,
    ratings: 60,
    image: 'https://picsum.photos/id/192/480/300',
  },
  {
    id: '5',
    title: 'The Spice Route',
    description: 'A fusion blog that combines the flavors of India. Thailand. and China.',
    address: '246 Main St. Anytown USA',
    score: 4.6,
    ratings: 90,
    image: 'https://picsum.photos/id/195/480/300',
  },
  {
    id: '6',
    title: 'The Catch of the Day',
    description: 'A seafood blog with a focus on locally-sourced. sustainable ingredients.',
    address: '369 Beach Blvd. Anytown USA',
    score: 4.3,
    ratings: 70,
    image: 'https://picsum.photos/id/225/480/300',
  },
  {
    id: '7',
    title: 'The Garden Cafe',
    description: 'A vegetarian blog with a beautiful outdoor garden seating area.',
    address: '753 Maple St. Anytown USA',
    score: 4.9,
    ratings: 150,
    image: 'https://picsum.photos/id/292/480/300',
  },
  {
    id: '8',
    title: 'The Burger Joint',
    description: 'A classic American diner with a wide variety of burgers. fries. and milkshakes.',
    address: '852 Oak Ave. Anytown USA',
    score: 3.9,
    ratings: 50,
    image: 'https://picsum.photos/id/326/480/300',
  },
  {
    id: '9',
    title: 'The Cozy Corner',
    description:
      'A small cafe with a warm and inviting atmosphere. serving breakfast and lunch dishes.',
    address: '963 Main St. Anytown USA',
    score: 4.7,
    ratings: 110,
    image: 'https://picsum.photos/id/365/480/300',
  },
  {
    id: '10',
    title: 'The Steakhouse',
    description: 'A high-end blog specializing in premium cuts of beef and fine wines.',
    address: '1479 Elm St. Anytown USA',
    score: 4.1,
    ratings: 75,
    image: 'https://picsum.photos/id/395/480/300',
  },
  {
    id: '11',
    title: 'The Taco Truck',
    description: 'A casual Mexican blog serving authentic street tacos.',
    address: '753 Main St. Anytown USA',
    score: 4.4,
    ratings: 65,
    image: 'https://picsum.photos/id/429/480/300',
  },
  {
    id: '12',
    title: 'The Ice Cream Parlor',
    description: 'A family-friendly blog with a wide variety of ice cream flavors.',
    address: '852 Oak Ave. Anytown USA',
    score: 4.9,
    ratings: 150,
    image: 'https://picsum.photos/id/431/480/300',
  },
];

// Simular un delay en la respuesta de la API
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, Math.random() * ms));

const api = {
  // Obtener todos los blogs
  list: async (): Promise<Blog[]> => {
    // Obtenemos la información de Google Sheets en formato texto y la dividimos por líneas, nos saltamos la primera línea porque es el encabezado
    const [, ...data] = await fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSqll46UrjPNioS4Zc-z7eopQbzMq0IonQ5ih8nA2LJk3g4xxTG6gGSMR_QYzKTyrS5DBbAjXo1zbBH/pub?output=csv',
    )
      .then((res) => res.text())
      .then((text) => text.split('\n'));
    // Convertimos cada línea en un objeto Blog, asegúrate de que los campos no posean `,`
    const blogs: Blog[] = data.map((row) => {
      const [id, title, description, address, score, ratings, image] = row.split(',');
      return {
        id,
        title,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image,
      };
    });

    // Lo retornamos
    return blogs;
  },
  // Obtener un blog específico por su ID
  fetch: async (id: Blog['id']): Promise<Blog> => {
    const blogs = await api.list(); // Llamar a la API para obtener todos los blogs
    const blog = blogs.find((blog) => blog.id === id);

    if (!blog) {
      throw new Error(`Blog with id ${id} not found`);
    }

    return blog;
  },
};

export default api;
