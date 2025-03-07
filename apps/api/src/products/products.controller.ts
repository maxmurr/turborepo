import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import type { CreateProductRequest } from '@repo/types';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() createProductRequest: CreateProductRequest) {
    return this.productsService.create(createProductRequest);
  }

  @Get()
  async getProducts() {
    return this.productsService.findAll();
  }
}
