import Header from './components/Header';
import BlogCard from './components/BlogCard';
import SearchBox from '../(index)/components/SearchBox';
import Pagination from '../(index)/components/Pagination';
import Link from 'next/link';
import api from '@/src/api';
import { unstable_cache } from 'next/cache';

const fetchBlogs = unstable_cache(
  async (q: string, page: number, limit: number) => {
    return api.search(q, page, limit);
  },
  ['blogs'],
  { revalidate: 60 },
);

export default async function HomePage({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ q?: string; page?: string; limit?: string }>;
}) {
  const searchParams = await searchParamsPromise;

  const q = searchParams.q || '';
  const page = parseInt(searchParams.page || '1', 10);
  const limit = parseInt(searchParams.limit || '2', 10);

  const { blogs, total } = await fetchBlogs(q, page, limit);
  const totalPages = Math.ceil(total / limit);

  return (
    <main>
      <Header />
      <div className="flex justify-center">
        <SearchBox />
      </div>
      <section className="wrap">
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p>No se encontraron resultados para "{q}".</p>
        )}
      </section>

      {totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} q={q} />}
    </main>
  );
}
