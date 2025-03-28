import Header from '../(index)/components/Header';
import BlogCard from '../(index)/components/BlogCard';
import api from '@/src/api';

export default async function HomePage() {
  const blogs = await api.list();

  return (
    <main>
      <Header />
      <section className="wrap">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </section>
    </main>
  );
}
