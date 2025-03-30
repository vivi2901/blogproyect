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
    <main>
      <header
        className="relative flex w-full items-center justify-center bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-50"
        style={{ backgroundImage: `url(${blog.image_url})` }}
      >
        <section className="relative w-auto py-32 px-4 text-center rounded-lg">
          <h1 className="text-4xl font-bold text-white">{blog.title}</h1>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 transform bg-teal-600 px-5 py-2 rounded-t-lg">
            <span className="text-gray-900">Mi </span>
            <span className="text-gray-900">Blog</span>
          </div>
        </section>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <p className="text-sm text-gray-500 mt-1">
          {blog.comments_count} comentarios | {blog.views_count} vistas | {blog.publication_date}
        </p>

        <article className="mt-6 text-gray-700 leading-relaxed">{blog.content}</article>
      </div>
    </main>
  );
}
