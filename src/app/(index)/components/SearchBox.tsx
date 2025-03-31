'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() !== searchParams.get('q')) {
        router.push(`/?q=${query.trim()}&page=1`);
      }
    }, 10);

    return () => clearTimeout(delayDebounce);
  }, [query, router, searchParams]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (query.trim() !== searchParams.get('q')) {
      router.push(`/?q=${query.trim()}&page=1`);
    }
  }

  return (
    <form className="mb-5 mt-5 w-full max-w-6xl" onSubmit={handleSubmit}>
      <div className="flex items-center border border-yellow-800 rounded-lg w-full caret-yellow-800">
        <input
          className="px-4 flex-1 focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          name="query"
          type="text"
          placeholder="Buscar"
        />
        <button className="bg-yellow-800 p-4 rounded-r-md" type="submit">
          <FaSearch className="text-white" />
        </button>
      </div>
    </form>
  );
}
