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
        className="relative flex w-full items-start justify-start bg-cover bg-start bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-50"
        style={{ backgroundImage: `url(${blog.image_url})` }}
      >
        <section className="relative w-auto py-32 px-32 text-center rounded-lg">
          <h1 className="text-4xl font-bold text-white">{blog.title}</h1>
        </section>
      </header>

      <div className="w-full flex justify-center items-center">
        <div className="max-w-6xl w-full overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg m-2">
          <div className="max-w-5xl mx-auto p-6">
            <div className="grid grid-cols-3 text-start text-sm text-gray-500 font-semibold">
              <span>Comentarios</span>
              <span>Vistas</span>
              <span>Fecha</span>
            </div>
            <div className="grid grid-cols-3 text-start font-[Plus_Jakarta_Sans] text-2xl text-gray-700">
              <span>{blog.comments_count}</span>
              <span>{blog.views_count} vistas</span>
              <span>{blog.publication_date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="max-w-6xl w-full overflow-hidden flex m-2">
          <article className="mt-6 text-gray-700 leading-relaxed text-lg text-justify">
            {blog.content}
          </article>
        </div>
      </div>
    </main>
  );
}
