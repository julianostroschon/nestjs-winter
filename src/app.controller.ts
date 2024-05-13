import { Controller, Get, Req } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';

@Controller()
export class AppController {
  constructor(@InjectKnex() private readonly db: Knex) {}
  @Get()
  async getHello(@Req() { body }: Request): Promise<{ message: string }> {
    const user = await this.db<{ nome: string }>('usuarios')
      .where('email', 'demo@demo.com')
      .first();

    return { message: `Hello World, ${user.nome}` };
  }
}
