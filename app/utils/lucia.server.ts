import { lucia } from 'lucia';
import { prisma } from '@lucia-auth/adapter-prisma';
import { DatabaseClient } from './prisma.server';

export const auth = lucia({
  env: 'DEV',
  adapter: prisma(DatabaseClient),
});

export type Auth = typeof auth;
