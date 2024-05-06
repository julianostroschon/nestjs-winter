import { Controller, Post } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';

@Controller()
export class AppController {
  constructor(@InjectKnex() private readonly db: Knex) {}
  @Post()
  async getHello(): Promise<{ message: string }> {
    const user = await this.db<{ nome: string }>('usuarios')
      .where('email', 'demo@demo.com')
      .first('nome');
    return { message: `Hello World, ${user.nome}` };
  }
}
