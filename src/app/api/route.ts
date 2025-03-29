import type { NextRequest } from 'next/server';

import api from '@/src/api';

export async function GET(request: NextRequest) {
  const blogs = await api.list();

  return Response.json(blogs);
}
