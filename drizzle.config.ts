import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql", // ganti ke "sqlite" atau "mysql" jika perlu
  dbCredentials: {
    url: process.env.DATABASE_URL!, // nanti kita set di .env
  },
});
