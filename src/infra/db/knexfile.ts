import { KnexModule } from 'nestjs-knex';
import { databaseConfig } from '../env';
import { join } from 'path';

const absolute = (dest: string): string => join(__dirname, '../../../', dest);

export const knex = KnexModule.forRoot({
  config: {
    client: databaseConfig.DB_DRIVER,
    useNullAsDefault: true,
    connection: {
      database: databaseConfig.DB_NAME,
      user: databaseConfig.DB_USERNAME,
      password: databaseConfig.DB_PASSWORD,
      host: databaseConfig.DB_HOST,
      port: databaseConfig.DB_PORT,
      ssl: databaseConfig.DB_SSL_CERTIFICATE,
    },
    migrations: {
      directory: absolute('knex/migrations'),
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: absolute('knex/seeds'),
    },
  },
});
