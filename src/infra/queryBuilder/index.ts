import { KnexModule } from 'nestjs-knex';
import { databaseConfig } from '../env';

export const knex = KnexModule.forRoot({
  config: {
    client: databaseConfig.DB_DRIVER,
    // version: '5.7',
    useNullAsDefault: true,
    connection: {
      database: databaseConfig.DB_NAME,
      user: databaseConfig.DB_USERNAME,
      password: databaseConfig.DB_PASSWORD,
      host: databaseConfig.DB_HOST,
      port: databaseConfig.DB_PORT,
      ssl: databaseConfig.DB_SSL_CERTIFICATE,
    },
  },
});
