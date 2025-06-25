import { SQLDatabase } from "encore.dev/storage/sqldb";

export const db = new SQLDatabase("database", {
  migrations: {
    path: "./prisma/migrations",
    source: "prisma",
  },
});
