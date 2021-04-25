import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  id: number;

  @Field()
  name: string;
}
