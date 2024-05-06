import { config } from 'dotenv';
import { z } from 'zod';
import { DBConfig } from './types';

config();

const envRaw = z.object({
  DB_SSL_CERTIFICATE: z.boolean().default(false),
  DB_PASSWORD: z.string().default('53cr3T'),
  DB_USERNAME: z.string().default('root'),
  DB_NAME: z.string().default('graphql'),
  DB_DRIVER: z.string().default('pg'),
  DB_PORT: z.coerce.number().int().gte(100).lte(64999),
  DB_HOST: z.string().default('localhost'),
});

export const env = envRaw.parse(process.env);

export const databaseConfig: DBConfig = Object.freeze({
  DB_SSL_CERTIFICATE: env.DB_SSL_CERTIFICATE,
  DB_USERNAME: env.DB_USERNAME,
  DB_PASSWORD: env.DB_PASSWORD,
  DB_DRIVER: env.DB_DRIVER,
  DB_PORT: env.DB_PORT,
  DB_HOST: env.DB_HOST,
  DB_NAME: env.DB_NAME,
});
