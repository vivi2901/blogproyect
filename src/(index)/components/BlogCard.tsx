import Link from 'next/link';

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
    <div className="w-full flex justify-center items-center bg-gray-100">
      <div className="max-w-4xl w-full overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg flex m-2">
        <img src={blog.image_url} alt={blog.title} className="w-1/3 h-auto object-cover" />

        <div className="p-6 flex-1">
          <div className="text-sm text-gray-500">
            <Link href="/" className="text-teal-600 hover:underline">
              Viajes
            </Link>{' '}
            /{' '}
            <Link href="/" className="text-teal-600 hover:underline">
              Bolivia
            </Link>
          </div>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            <Link href={`/${blog.id}`} className="hover:text-teal-600 transition-colors">
              {blog.title}
            </Link>
          </h2>

          <p className="mt-2 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
            por <span className="font-semibold text-teal-600">{blog.author_name}</span> en{' '}
            {blog.publication_date} con{' '}
            <Link href={`/${blog.id}#comments`} className="text-teal-600 hover:underline">
              {blog.comments_count} Comentarios
            </Link>
          </p>

          <p className="mt-4 text-gray-700">{blog.description}</p>

          <div className="mt-4">
            <Link
              href={`/${blog.id}`}
              className="inline-block bg-teal-600 px-4 py-2 text-white rounded-md hover:bg-teal-700 transition-all"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
