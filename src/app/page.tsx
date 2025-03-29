import Header from './(index)/components/Header';
import BlogCard from './(index)/components/BlogCard';
import Link from 'next/link';
import api from '@/src/api';

export const dynamic = 'force-static';

export default async function HomePage() {
  const blogs = await api.list();

  return (
    <main>
      <Header />
      <section className="wrap">
        {blogs.map((blog) => (
          <Link href={`/${blog.id}`} key={blog.id}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </section>
    </main>
  );
}
