import Link from 'next/link';

export default function Pagination({
  currentPage,
  totalPages,
  q,
}: {
  currentPage: number;
  totalPages: number;
  q: string;
}) {
  return (
    <div className="flex justify-center mt-5 space-x-3">
      {currentPage > 1 && (
        <Link
          href={`/?q=${q}&page=${currentPage - 1}`}
          className="inline-block bg-teal-600 px-4 py-2 text-white rounded-md hover:bg-teal-700 transition-all"
        >
          {'<'}
        </Link>
      )}

      <span className="px-4 py-2">{`Página ${currentPage} de ${totalPages}`}</span>

      {currentPage < totalPages && (
        <Link
          href={`/?q=${q}&page=${currentPage + 1}`}
          className="inline-block bg-teal-600 px-4 py-2 text-white rounded-md hover:bg-teal-700 transition-all"
        >
          {'>'}
        </Link>
      )}
    </div>
  );
}
