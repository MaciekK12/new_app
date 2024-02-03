import jwt from "jsonwebtoken";

export function verifyToken(token) {
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // Tutaj możesz również przeprowadzić dodatkowe sprawdzenia, na przykład czy użytkownik istnieje w bazie danych.
    return true;
  } catch (error) {
    return false;
  }
}
