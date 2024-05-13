import { Query, Resolver } from '@nestjs/graphql';
@Resolver()
export class RootResolver {
  @Query(() => String)
  ping(el: any): string {
    return 'pong!';
  }
}
