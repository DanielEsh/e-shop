import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository, getConnection } from 'typeorm';
import { Product } from './models/product.models';
import { CreateProductInput } from './dto/input/create-product.input';
import { UpdateProductInput } from './dto/input/update-product.input';
import { DeleteProductInput } from './dto/input/delete-product.input';
import { GetProductByIdArgs } from './dto/args/get-product-by-id.args';

@Injectable()
export class ProductServices {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async getProductById(
    GetProductByIdArgs: GetProductByIdArgs,
  ): Promise<Product> {
    return this.productRepository.findOne(GetProductByIdArgs);
  }

  async createProduct(createProductData: CreateProductInput): Promise<Product> {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(ProductEntity)
      .values([createProductData])
      .execute();
    return createProductData;
  }

  async updateProduct(updateProductData: UpdateProductInput): Promise<Product> {
    await getConnection()
      .createQueryBuilder()
      .update(ProductEntity)
      .set({ ...updateProductData })
      .where('id=:id', { id: updateProductData.id })
      .execute();
    return updateProductData;
  }

  async deleteProduct(deleteProductData: DeleteProductInput): Promise<Product> {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(ProductEntity)
      .where('id=:id', { id: deleteProductData.id })
      .execute();
    return deleteProductData;
  }
}
