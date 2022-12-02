import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model/review.model';

@Controller('review')
export class ReviewController {
  // создание нового обзора, при создании исключаем _id из body так как потом будет создан в базе данных
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {}
  // удаляем обзор
  @Delete(':id')
  async delete(@Param('id') id: string) {}
  // получить продукт по id
  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {}
}
