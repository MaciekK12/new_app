import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Opcjonalnie, możesz zdefiniować typ dla danych użytkownika
interface User {
  id: string; // lub number, zależnie od Twojej bazy danych
  name: string;
}

interface ErrorResponse {
  error: string;
}

export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ data: users }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
