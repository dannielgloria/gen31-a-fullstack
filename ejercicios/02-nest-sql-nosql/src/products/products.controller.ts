import { Product } from './product.entity/product.entity';
import { ProductsService } from './products.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.ProductsService.findAll();
  }

  @Post()
  create(@Body() product: Partial<Product>) {
    return this.ProductsService.createProduct(product);
  }
  // en el body enviara un json con el siguiente cuerpo
  /**
   * {
   *    'id': 1
   *    'name': 'Refresco de cola'
   *    'price': 40
   * }
   *
   */
}
