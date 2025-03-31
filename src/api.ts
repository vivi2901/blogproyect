import Papa from 'papaparse';
import { Blog } from './types';
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, Math.random() * ms));

const api = {
  list: async (): Promise<Blog[]> => {
    const response = await fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSqll46UrjPNioS4Zc-z7eopQbzMq0IonQ5ih8nA2LJk3g4xxTG6gGSMR_QYzKTyrS5DBbAjXo1zbBH/pub?output=csv',
    );

    const text = await response.text();

    const parsedData = Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
    });

    const blogs: Blog[] = parsedData.data.map((row: any) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      content: row.content,
      author_name: row.author_name,
      publication_date: row.publication_date,
      views_count: Number(row.views_count),
      comments_count: Number(row.comments_count),
      image_url: row.image_url,
    }));

    return blogs;
  },

  fetch: async (id: Blog['id']): Promise<Blog | null> => {
    const blogs = await api.list();
    return blogs.find((blog) => blog.id === id) || null;
  },

  search: async (
    query: string = '',
    page: number = 1,
    limit: number = 5,
  ): Promise<{ blogs: Blog[]; total: number }> => {
    const results = await api.list();

    const filteredBlogs = results.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase()),
    );

    const total = filteredBlogs.length;
    const startIndex = (page - 1) * limit;
    const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + limit);

    return { blogs: paginatedBlogs, total };
  },
};

export default api;
