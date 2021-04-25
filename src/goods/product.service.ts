import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
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
    console.log('create', createProductData);
    return this.productRepository.create(createProductData);
  }

  async updateProduct(updateProductData: UpdateProductInput): Promise<Product> {
    console.log('update', updateProductData);
    return;
    // return this.productRepository.update();
  }

  async deleteProduct(deleteProductData: DeleteProductInput): Promise<Product> {
    console.log('delete', deleteProductData);
    return;
    // return this.productRepository.delete();
  }
}
