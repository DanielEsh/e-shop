import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetProductByIdArgs {
  @Field()
  @IsNotEmpty()
  id: number;
}
