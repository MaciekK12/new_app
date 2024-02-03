import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

// Interfejs UserType do walidacji
interface UserType {
  id: string;
  name: string;
  email: string;
  // password: string; 
}

const prisma = new PrismaClient({log: ['query', 'info', 'warn', 'error']});

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<{ users: UserType[] | []; error?: string }>
) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    const validatedUsers: UserType[] = users.map((user) => {
      const { id, email, name } = user;
      return { id, email, name, password: '****' }; 
    });
    

    res.status(200).json({ users:validatedUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ users: [], error: 'Błąd serwera' });
  }
}
