import Link from 'next/link';
import { FaEye } from 'react-icons/fa';
import { LuMessageSquareMore } from 'react-icons/lu';

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    description: string;
    content: string;
    author_name: string;
    publication_date: string;
    views_count: number;
    comments_count: number;
    image_url: string;
  };
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-6xl w-full overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg flex m-2">
        <img src={blog.image_url} alt={blog.title} className="w-1/3 h-auto object-cover" />

        <div className="p-6 flex-1">
          <div className="text-sm text-gray-500 flex justify-between items-center">
            <div>
              <Link href="/" className="text-teal-600 hover:underline">
                Viajes
              </Link>{' '}
              /{' '}
              <Link href="/" className="text-teal-600 hover:underline">
                Bolivia
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <FaEye className="text-yellow-800" />
              <span className="text-yellow-800">{blog.views_count}</span>
            </div>
          </div>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            <Link href={`/${blog.id}`} className="hover:text-teal-600 transition-colors">
              {blog.title}
            </Link>
          </h2>

          <div className="mt-2 flex justify-between items-center text-sm font-[Plus_Jakarta_Sans] text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
            <span>
              por <span className="font-semibold text-teal-600">{blog.author_name}</span> en{' '}
              {blog.publication_date}
            </span>
            <div className="flex items-center gap-4 font-[Plus_Jakarta_Sans]">
              <div className="flex items-center gap-1">
                <LuMessageSquareMore />
                <span>{blog.comments_count}</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-gray-700">{blog.description}</p>

          <div className="mt-4">
            <Link
              href={`/${blog.id}`}
              className="inline-block bg-teal-600 px-4 py-2 text-white rounded-md hover:bg-teal-700 transition-all"
            >
              Leer más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
