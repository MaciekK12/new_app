import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { createHash } from 'crypto';
import { verifyToken } from '../../../utils/verifyToken';
import { generateToken } from '@/utils/generateToken';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; token?: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password }: { email: string; password: string } = req.body;

  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (!existingUser) {
    return res.status(401).json({ message: 'User not found' });
  }

  const hashedPassword = createHash('sha256').update(password).digest('hex');
  if (hashedPassword !== existingUser.password) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  // Zakładając, że funkcja generująca token wymaga ID użytkownika jako argument
  const token: string | null = generateToken(existingUser); // Załóżmy, że 'existingUser.id' jest prawidłowym argumentem

  // Przed zwróceniem tokena, możesz go zweryfikować używając funkcji verifyToken
  // Zakładając, że verifyToken wymaga tokena jako argumentu

  if (token === null) {
    // Jeśli token jest null, zwróć błąd
    return res.status(500).json({ message: 'Failed to generate token' });
  }

  if (!verifyToken(token)) {
    return res.status(401).json({ message: 'Token verification failed' });
  }

  return res.status(200).json({ token: token, message: 'Login successful' });
}
