import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { hashPassword, comparePassword } from "@/utils/hash";
import { generateToken } from "@/utils/jwt";

export class UserService {
  static async register(name: string, email: string, password: string) {
    const existing = await db.select().from(users).where(eq(users.email, email));
    if (existing.length > 0) throw new Error("Email already registered");

    const hashed = await hashPassword(password);
    const [newUser] = await db.insert(users).values({ name, email, password: hashed }).returning();
    return newUser;
  }

  static async login(email: string, password: string) {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    if (!user) throw new Error("Invalid credentials");

    const isValid = await comparePassword(password, user.password);
    if (!isValid) throw new Error("Invalid credentials");

    const token = generateToken({ id: user.id, email: user.email });
    return { user:{
      id: user.id,
      name: user.name,
      email: user.email
    }, token };
  }

  static async getProfile(id: number) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
}
