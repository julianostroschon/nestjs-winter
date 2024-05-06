import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { knex } from './infra/queryBuilder';

@Module({
  imports: [knex],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
