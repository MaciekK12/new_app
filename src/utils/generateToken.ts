import jwt, { Secret } from "jsonwebtoken";

// Przykładowe dane do umieszczenia w zawartości (payload)


export function generateToken(existingUser:{id:string,email:string,name:string}): string | null {
  const secret: Secret | undefined = process.env.JWT_SECRET;

  if (!secret) {
    return null;
  }

  try {
    // Tworzymy token JWT
    const token = jwt.sign(existingUser, secret, { expiresIn: "1h" }); // Możesz dostosować expiresIn do swoich potrzeb

    return token;
  } catch (error) {
    console.error("Token generation error:", error);
    return null;
  }
}

// // Przykład użycia funkcji do generowania tokena
// const generatedToken = generateToken();
// if (generatedToken) {
//   console.log("Generated JWT token:", generatedToken);
// } else {
//   console.error("Failed to generate JWT token.");
// }
