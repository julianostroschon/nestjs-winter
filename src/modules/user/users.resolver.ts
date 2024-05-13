import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns): typeof User => User)
  async userGet(@Args('id') id: string): Promise<User> {
    const user = await this.usersService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  // @Query((returns) => [User])
  // userLoad(@Args() recipesArgs: UsersArgs): Promise<User[]> {
  //   return this.usersService.findAll(recipesArgs);
  // }

  // @Mutation((returns) => User)
  // async addRecipe(
  //   @Args('newRecipeData') newRecipeData: NewUserInput,
  // ): Promise<User> {
  //   const recipe = await this.uusersService.create(newRecipeData);
  // pubSub.publish('recipeAdded', { recipeAdded: recipe });
  //   return recipe;
  // }

  // @Mutation((returns) => Boolean)
  // async removeRecipe(@Args('id') id: string) {
  //   return this.uusersService.remove(id);
  // }

  // @Subscription((returns) => User)
  // recipeAdded() {
  // return pubSub.asyncIterator('recipeAdded');
  //   return null;
  // }
}
