import { Blog } from './types';
//const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, Math.random() * ms));

const api = {
  list: async (): Promise<Blog[]> => {
    const [, ...data] = await fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSqll46UrjPNioS4Zc-z7eopQbzMq0IonQ5ih8nA2LJk3g4xxTG6gGSMR_QYzKTyrS5DBbAjXo1zbBH/pub?output=csv',
    )
      .then((res) => res.text())
      .then((text) => text.split('\n'));
    const blogs: Blog[] = data.map((row) => {
      const [
        id,
        title,
        description,
        content,
        author_name,
        publication_date,
        views_count,
        comments_count,
        image_url,
      ] = row.split(',');
      return {
        id,
        title,
        description,
        content,
        author_name,
        publication_date,
        views_count: Number(views_count),
        comments_count: Number(comments_count),
        image_url,
      };
    });

    return blogs;
  },

  fetch: async (id: Blog['id']): Promise<Blog> => {
    const blogs = await api.list();
    const blog = blogs.find((blog) => blog.id === id);

    if (!blog) {
      throw new Error(`Blog with id ${id} not found`);
    }

    return blog;
  },
};

export default api;
