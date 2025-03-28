import Header from '../(index)/components/Header';
import Link from 'next/link';
import api from '@/src/api';

export default async function HomePage() {
  const blogs = await api.list();

  return (
    <main>
      <Header /> {}
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => {
          return (
            <article key={blog.id}>
              <img
                alt={blog.title}
                className="mb-3 h-[300px] w-full object-cover"
                src={blog.image}
              />
              <h2 className="inline-flex gap-2 text-lg font-bold">
                <Link href={`/${blog.id}`}>{blog.title}</Link>
                <small className="inline-flex gap-1">
                  <span>⭐</span>
                  <span>{blog.score}</span>
                  <span className="font-normal opacity-75">({blog.ratings})</span>
                </small>
              </h2>
              <p className="opacity-90">{blog.description}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
