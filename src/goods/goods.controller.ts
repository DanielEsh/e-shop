import { Controller, Get } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsI } from './goods.interface';

@Controller('goods')
export class GoodsController {
  constructor(private goodsService: GoodsService) {}

  @Get()
  findAll(): Promise<GoodsI[]> {
    return this.goodsService.findAll();
  }

  // @Get()
  // getDogs() {
  //   return 'we get all goods';
  // }
}
