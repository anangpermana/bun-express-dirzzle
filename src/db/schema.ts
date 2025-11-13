import { pgTable, serial, text, varchar, smallserial } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
});

export const roles = pgTable("roles", {
	name: varchar(),
	description: text(),
	id: smallserial().notNull(),
});