import { SQLDatabase } from "encore.dev/storage/sqldb";
import { PrismaClient } from "@prisma/client";

export const db = new SQLDatabase("database", {
  migrations: {
    path: "./prisma/migrations",
    source: "prisma",
  },
});

// Initialize Prisma client with the provided URL
// Encore services should call this function with db.connectionString
// so that the encore parser understands the database connection
export const prismaClient = (url: string) => {
  return new PrismaClient({
    datasources: {
      db: {
        url: url,
      },
    },
  });
};
