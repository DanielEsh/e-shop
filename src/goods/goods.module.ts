import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsEntity } from './goods.entity';
import { GoodsResolver } from './goods.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([GoodsEntity])],
  providers: [GoodsService, GoodsResolver],
})
export class GoodsModule {}
