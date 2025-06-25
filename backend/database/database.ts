import { SQLDatabase } from "encore.dev/storage/sqldb";
import { PrismaClient } from "@prisma/client";

export const db = new SQLDatabase("database", {
  migrations: {
    path: "./prisma/migrations",
    source: "prisma",
  },
});

// Each Encore service must import the db and create it's own instance of a PrismaClient, e.g:
// export const prisma = new PrismaClient({ datasources: { db: {url: db.connectionString}}});
