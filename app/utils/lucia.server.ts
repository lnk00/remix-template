import { lucia } from 'lucia';
import { prisma } from '@lucia-auth/adapter-prisma';
import { DatabaseClient } from './prisma.server';
import { web } from 'lucia/middleware';

export const auth = lucia({
  env: 'DEV',
  adapter: prisma(DatabaseClient),
  middleware: web(),
  sessionCookie: {
    expires: false,
  },
});

export type Auth = typeof auth;
