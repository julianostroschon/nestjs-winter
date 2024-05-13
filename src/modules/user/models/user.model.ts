import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe ' })
export class User {
  @Field((type) => ID)
  id: string;

  @Directive('@upper')
  name: string;

  @Field({ nullable: true })
  email?: string;
}
