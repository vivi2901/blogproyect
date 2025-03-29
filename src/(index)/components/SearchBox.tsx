'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get('query')?.toString().trim();

    if (query) {
      router.push(`/?q=${query}`);
    } else {
      router.push('/');
    }
  }

  return (
    <form className="mb-4 inline-flex gap-2" onSubmit={handleSubmit}>
      <input
        className="px-2"
        defaultValue={searchParams.get('q') || ''}
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
