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
        <Link href={`/?q=${q}&page=${currentPage - 1}`} className="px-4 py-2 bg-gray-300 rounded">
          Anterior
        </Link>
      )}

      <span className="px-4 py-2">{`Página ${currentPage} de ${totalPages}`}</span>

      {currentPage < totalPages && (
        <Link href={`/?q=${q}&page=${currentPage + 1}`} className="px-4 py-2 bg-gray-300 rounded">
          Siguiente
        </Link>
      )}
    </div>
  );
}
