import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { createHash } from 'crypto';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password, name }: { email: string; password: string; name: string } = req.body;

  try {
    // Sprawdzamy, czy użytkownik z tym adresem email już istnieje
    const existingUser = await prisma.user.findFirst({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hashujemy hasło przed zapisaniem
    const hashedPassword = createHash('sha256').update(password).digest('hex');

    // Tworzymy nowego użytkownika w bazie danych
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Odpowiedź po pomyślnej rejestracji (możesz również zdecydować się na wysłanie tokena JWT)
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    // Obsługa błędów serwera
    return res.status(500).json({ message: 'Internal server error' });
  }
}
