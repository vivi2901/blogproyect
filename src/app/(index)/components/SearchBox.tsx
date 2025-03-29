'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBox() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/?q=${query.trim()}`);
  }

  return (
    <form className="mb-4 inline-flex gap-2" onSubmit={handleSubmit}>
      <input
        className="px-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        name="query"
        type="text"
        placeholder="Search"
      />
      <button className="bg-white/20 p-2" type="submit">
        Search
      </button>
    </form>
  );
}
