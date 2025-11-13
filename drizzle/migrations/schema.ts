import { pgTable, serial, varchar, text, smallserial } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 100 }).notNull(),
	email: text().notNull(),
	password: text().notNull(),
});

export const roles = pgTable("roles", {
	name: varchar(),
	description: text(),
	id: smallserial().notNull(),
});
