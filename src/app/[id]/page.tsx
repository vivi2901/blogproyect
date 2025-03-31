import api from '@/src/api';
import Link from 'next/link';
import { IoIosArrowRoundBack } from 'react-icons/io';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await api.fetch(id);

  if (!blog) {
    return {
      title: 'Blog no encontrado - Blog',
      description: 'El blog que buscas no existe o ha sido eliminado.',
    };
  }

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

  if (!blog) {
    return (
      <main className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl font-bold text-red-600">Error 404</h1>
        <p className="text-lg text-gray-700">El blog que buscas no existe o fue eliminado.</p>
        <Link
          href="/"
          className="mt-4 px-6 py-2 bg-yellow-800 text-white rounded-lg hover:bg-yellow-700 transition"
        >
          Volver al inicio
        </Link>
      </main>
    );
  }

  return (
    <main>
      <header
        className="relative flex w-full items-start justify-start bg-cover bg-start bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-50"
        style={{ backgroundImage: `url(${blog.image_url})` }}
      >
        <section className="relative w-auto py-32 px-24 pl-24 text-left rounded-lg">
          <Link
            href={`/`}
            className="pb-8 inline-block text-white hover:text-teal-300 transition-all"
          >
            <IoIosArrowRoundBack className="inline-block mr-1" />
            Regresar
          </Link>
          <div className="text-white">
            <Link href="/" className="hover:underline">
              Viajes
            </Link>{' '}
            /{' '}
            <Link href="/" className="hover:underline">
              Bolivia
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-white">{blog.title}</h1>
          <p className="mt-2 text-lg text-gray-300">{blog.description}</p>
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
