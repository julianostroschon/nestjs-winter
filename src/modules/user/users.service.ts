import { Injectable } from '@nestjs/common';
import { NewUserInput } from './dto/new-user.input';
import { UsersArgs } from './dto/users.args';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewUserInput): Promise<User> {
    return { data } as any;
  }

  async findOneById(id: string): Promise<User> {
    console.log({ id });
    return {} as any;
  }

  async findAll(userArgs: UsersArgs): Promise<User[]> {
    return [userArgs] as any;
  }

  async remove(id: string): Promise<boolean> {
    console.log({ id });
    return true;
  }
}
