import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { knex } from './infra/db/knexfile';
import { graphql } from './modules/graphql';
import { RootResolver } from './modules/root';

@Module({
  imports: [knex, graphql],
  controllers: [AppController],
  providers: [AppService, RootResolver],
})
export class AppModule {}
