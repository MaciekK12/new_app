import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

type UserType = {
  id: string;
  email: string;
  name: string;
  password: string; 
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<{ users: any[] | []; error?: string }>
) {
  try {
    const users = await prisma.users.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
    console.log(users);
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ users: [], error: 'Błąd serwera' });
  }
}


