import api from '@/src/api';

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await api.fetch(id);

  return (
    <article key={blog.id}>
      <img alt={blog.title} className="mb-3 h-[300px] w-full object-cover" src={blog.image} />
      <h2 className="inline-flex gap-2 text-lg font-bold">
        <span>{blog.title}</span>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{blog.score}</span>
          <span className="font-normal opacity-75">({blog.ratings})</span>
        </small>
      </h2>
      <p className="opacity-90">{blog.description}</p>
    </article>
  );
}
