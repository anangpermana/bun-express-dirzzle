import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecret"; // ubah di .env untuk production
const EXPIRES_IN = "1d";

export function generateToken(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: EXPIRES_IN });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}
