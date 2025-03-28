// app/(index)/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative flex w-full items-center justify-center bg-cover bg-no-repeat">
      <section className="relative w-auto py-32 px-4 text-white text-center">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 transform bg-yellow-500 px-5 py-2 rounded-t-lg">
          <Link href="/">
            <span className="hover:text-gray-900">Home</span>
          </Link>
          <span className="mx-2 text-gray-300">&raquo;</span>
          <span className="text-gray-900">Blog</span>
        </div>
      </section>
    </header>
  );
}
