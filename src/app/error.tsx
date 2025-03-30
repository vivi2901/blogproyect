'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-red-800">¡Algo salió mal!</h2>
        <p className="mt-4 mb-4 text-gray-700">
          Lo sentimos, ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.
        </p>
        <Link
          href={`/`}
          className="bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-900 transition-colors"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}
