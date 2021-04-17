import { ParseIntPipe } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
// import { PubSub } from 'graphql-subscriptions';
import { GoodsService } from './goods.service';
import { GoodsI } from './goods.interface';

@Resolver('goods')
export class GoodsResolver {
  constructor(private readonly goodsService: GoodsService) {}

  @Query('goods')
  async getGoods() {
    return this.goodsService.findAll();
  }

  @Query('goodsItem')
  async findOne(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<GoodsI> {
    return this.goodsService.findOne(id);
  }
}
