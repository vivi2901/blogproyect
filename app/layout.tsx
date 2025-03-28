import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Blog - Hello World',
  description: 'The best blogs in the world',
  keywords: ['blog', 'food', 'eat', 'dinner', 'lunch'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[3rem]">Blog</header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Blog
        </footer>
      </body>
    </html>
  );
}
