import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { hashPassword, comparePassword } from "@/utils/hash";

export class AuthService {
  static async register(name: string, email: string, password: string) {
    const existing = await db.select().from(users).where(eq(users.email, email));
    if (existing.length > 0) throw new Error("Email already registered");

    const hashed = await hashPassword(password);
    const [newUser] = await db.insert(users).values({ name, email, password: hashed }).returning();
    return newUser;
  }
}