import { Injectable } from '@nestjs/common';
import { CreateProductRequest, Product } from '@repo/types';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  create(createProductRequest: CreateProductRequest) {
    const product = {
      ...createProductRequest,
      id: this.products.length + 1,
    };
    this.products.push(product);
    return product;
  }

  findAll() {
    return this.products;
  }
}
