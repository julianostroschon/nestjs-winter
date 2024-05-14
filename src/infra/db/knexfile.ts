import { KnexModule } from 'nestjs-knex';
import { databaseConfig } from '../env';
import { join } from 'path';

const absolute = (dest: string): string => join(__dirname, '../../../', dest);
const connectionString = `postgres://${databaseConfig.DB_USERNAME}:${databaseConfig.DB_PASSWORD}@${databaseConfig.DB_HOST}:${databaseConfig.DB_PORT}/${databaseConfig.DB_NAME}`;

const connection: Conn = {
  connectionString,
  host: databaseConfig['DB_HOST'],
  port: databaseConfig['DB_PORT'],
  user: databaseConfig['DB_USERNAME'],
  database: databaseConfig['DB_NAME'],
  password: databaseConfig['DB_PASSWORD'],
  ssl: databaseConfig['DB_SSL_CERTIFICATE:']
    ? { rejectUnauthorized: false }
    : false,
};
const config = {
  client: 'pg',
  // version: '',
  connection,
  migrations: {
    directory: absolute('knex/migrations'),
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: absolute('knex/seeds'),
  },
};
export const knex = KnexModule.forRoot({
  config,
});

console.log(config);

interface Conn {
  ssl?: false | { rejectUnauthorized: false };
  connectionString: string;
  password: string;
  database: string;
  port?: number;
  user: string;
  host: string;
}
