// app/(index)/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative flex w-full items-center justify-center bg-cover bg-no-repeat bg-gray-100">
      <section className="relative w-auto py-32 px-4 text-center">
        <h1 className="text-4xl font-bold">Blog</h1>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 transform bg-teal-600 px-5 py-2 rounded-t-lg">
          <span className="text-gray-900">Mi</span>
          <span className="text-gray-900">Blog</span>
        </div>
      </section>
    </header>
  );
}
