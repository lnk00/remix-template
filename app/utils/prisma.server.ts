import { createClient } from '@libsql/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { PrismaClient } from '@prisma/client';

const libSQL = createClient({
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_TOKEN!,
});

const adapter = new PrismaLibSQL(libSQL);
export const DatabaseClient = new PrismaClient({ adapter });
