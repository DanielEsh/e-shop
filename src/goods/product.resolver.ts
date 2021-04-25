import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductServices } from './product.service';
import { Product } from './models/product.models';
import { GetProductByIdArgs } from './dto/args/get-product-by-id.args';
import { CreateProductInput } from './dto/input/create-product.input';
import { UpdateProductInput } from './dto/input/update-product.input';
import { DeleteProductInput } from './dto/input/delete-product.input';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productServices: ProductServices) {}

  @Query(() => [Product], { name: 'products', nullable: 'items' })
  async getProducts(): Promise<Product[]> {
    return this.productServices.getProducts();
  }

  @Query(() => Product, { name: 'productById', nullable: true })
  async getProductById(
    @Args() GetProductByIdArgs: GetProductByIdArgs,
  ): Promise<Product> {
    return this.productServices.getProductById(GetProductByIdArgs);
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductData') createProductData: CreateProductInput,
  ): Promise<Product> {
    return this.productServices.createProduct(createProductData);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('updateProductData') updateProductData: UpdateProductInput,
  ): Promise<Product> {
    return this.productServices.updateProduct(updateProductData);
  }

  @Mutation(() => Product)
  async deleteProduct(
    @Args('deleteProductData') deleteProductData: DeleteProductInput,
  ): Promise<Product> {
    return this.productServices.deleteProduct(deleteProductData);
  }
}
