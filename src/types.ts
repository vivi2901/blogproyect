// Definimos la estructura de un blog
export interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  author_name: string;
  publication_date: string;
  views_count: number;
  comments_count: number;
  image_url: string;
}
