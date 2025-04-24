import { PrismaClient } from "@prisma/client";

// npm install @prisma/client
// npx prisma generate

// to fix problem PrismaClient is not exist
// ==========================

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["error", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
