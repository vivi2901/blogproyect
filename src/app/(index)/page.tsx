import Header from './components/Header';
import BlogCard from './components/BlogCard';
import SearchBox from '../(index)/components/SearchBox';
import Link from 'next/link';
import api from '@/src/api';
import { unstable_cache } from 'next/cache';

const fetchBlogs = unstable_cache(
  async (q: string) => {
    return api.search(q);
  },
  ['blogs'],
  { revalidate: 60 },
);

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = '' } = await searchParams;
  const blogs = await fetchBlogs(q);

  return (
    <main>
      <Header />
      <SearchBox />
      <section className="wrap">
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p>No se encontraron resultados para "{q}".</p>
        )}
      </section>
    </main>
  );
}
