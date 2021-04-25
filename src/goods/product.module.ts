import { Module } from '@nestjs/common';
import { ProductServices } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { ProductResolver } from './product.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [ProductServices, ProductResolver],
})
export class ProductModule {}
