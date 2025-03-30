import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Blog Viajes Vivian',
  description: 'Blog de mis viajes',
  keywords: ['blog', 'viajes', 'lugares', 'bolivia', 'turismo'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} BlogVivianEspindolaGoIT
        </footer>
      </body>
    </html>
  );
}
