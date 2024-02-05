import jwt, { Secret } from "jsonwebtoken";

export function verifyToken(token: string ): boolean {
  const secret: Secret | undefined = process.env.JWT_SECRET;

  if (!secret) {
    return false;
  }

  try {
    const decodedToken = jwt.verify(token, secret);
    // Tutaj możesz również przeprowadzić dodatkowe sprawdzenia, na przykład czy użytkownik istnieje w bazie danych.
    return true;
  } catch (error) {
    return false;
  }
}
