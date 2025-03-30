'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBox() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/?q=${query.trim()}`);
  }

  return (
    <form className="mb-5 mt-5 inline-flex" onSubmit={handleSubmit}>
      <div className="flex items-center border-[var(--custom-brown)] rounded">
        {' '}
        <input
          className="px-4 py-2 rounded-l-full border-[var(--custom-brown)] outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          name="query"
          type="text"
          placeholder="Buscar"
        />
        <button className="bg-white/20 p-2 rounded-r-full" type="submit">
          {' '}
          <FaSearch className="text-black" />
        </button>
      </div>
    </form>
  );
}
