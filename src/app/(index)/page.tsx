import Header from './components/Header';
import BlogCard from './components/BlogCard';
import SearchBox from '../(index)/components/SearchBox';
import Link from 'next/link';
import api from '@/src/api';

export default async function HomePage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  const { q } = await searchParams;
  const blogs = await api.search(q || '');

  return (
    <main>
      <Header />
      <SearchBox />
      <section className="wrap">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link href={`/${blog.id}`} key={blog.id}>
              <BlogCard blog={blog} />
            </Link>
          ))
        ) : (
          <p>No se encontraron resultados para "{q}".</p>
        )}
      </section>
    </main>
  );
}
