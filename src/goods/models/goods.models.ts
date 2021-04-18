import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Goods {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;
}
