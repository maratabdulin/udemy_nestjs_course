import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductModel } from './product.model/product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
  // создание нового продукта, при создании исключаем _id из body так как потом будет создан в базе данных
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) {}

  // получаем продукт по id
  @Get(':id')
  async get(@Param('id') id: string) {}

  // удаляем продукт
  @Delete(':id')
  async delete(@Param('id') id: string) {}

  // изменяем продукт
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: ProductModel) {}

  // чтобы найти нужный продукт
  @HttpCode(200) // код 200 потому что не создаем новый продукт
  @Post()
  async find(@Body() dto: FindProductDto) {}
}
