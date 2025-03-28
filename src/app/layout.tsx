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
      <body className="container m-auto">
        <main className="py-20">{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} BlogVivianEspindolaGoIT
        </footer>
      </body>
    </html>
  );
}
