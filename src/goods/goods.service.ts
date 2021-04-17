import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoodsEntity } from './goods.entity';
import { Repository } from 'typeorm';
import { GoodsI } from './goods.interface';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(GoodsEntity)
    private goodsRepository: Repository<GoodsEntity>,
  ) {}

  findAll(): Promise<GoodsI[]> {
    return this.goodsRepository.find();
  }

  findOne(id: number): Promise<GoodsI> {
    return this.goodsRepository.findOne(id);
  }
}
