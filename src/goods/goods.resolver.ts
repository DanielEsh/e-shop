import { ParseIntPipe } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
// import { PubSub } from 'graphql-subscriptions';
import { GoodsService } from './goods.service';
import { GoodsI } from './goods.interface';
import { Goods } from './models/goods.models';

@Resolver((of) => Goods)
export class GoodsResolver {
  constructor(private readonly goodsService: GoodsService) {}

  @Query((returns) => [Goods])
  async goods() {
    return this.goodsService.findAll();
  }

  @Query((returns) => Goods)
  async goodsItem(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<GoodsI> {
    return this.goodsService.findOne(id);
  }
}
