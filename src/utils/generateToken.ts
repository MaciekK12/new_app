import jwt, { Secret } from "jsonwebtoken";

export function generateToken(existingUser: { id: string, email: string, name: string }): string | null {
    
  const secret: Secret | undefined = process.env.JWT_SECRET;

  if (!secret) {
    return null;
  }

  try {
    const token = jwt.sign(existingUser, secret, { expiresIn: "1h" }); // Możesz dostosować expiresIn do swoich potrzeb

    return token;
  } catch (error) {
    console.error("Token generation error:", error);
    return null;
  }
}