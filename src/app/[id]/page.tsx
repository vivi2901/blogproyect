import api from '@/src/api';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await api.fetch(id);

  return {
    title: `${blog.title} - Blog`,
    description: blog.description,
  };
}

export async function generateStaticParams() {
  const blogs = await api.list();

  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await api.fetch(id);

  return (
    <article key={blog.id}>
      <img alt={blog.title} className="mb-3 h-[300px] w-full object-cover" src={blog.image_url} />
      <h2 className="inline-flex gap-2 text-lg font-bold">
        <span>{blog.title}</span>
        <small className="inline-flex gap-1">
          <span>{blog.views_count}</span>
          <span className="font-normal opacity-75">({blog.comments_count})</span>
        </small>
      </h2>
      <p className="opacity-90">{blog.description}</p>
    </article>
  );
}
