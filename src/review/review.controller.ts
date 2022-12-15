import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { REVIEW_NOT_FOUND } from './review.model/review.constants';

@Controller('review')
export class ReviewController {
  // подключение сервиса
  constructor(private readonly reviewService: ReviewService) {}
  // создание нового обзора, при создании исключаем _id из body так как потом будет создан в базе данных
  @Post('create')
  async create(@Body() dto: CreateReviewDto) {
    return this.reviewService.create(dto);
  }
  // удаляем обзор
  @Delete(':id')
  async delete(@Param('id') id: string) {
    // берем сервис из конструктора
    const deleteDoc = await this.reviewService.delete(id);
    // проверяем есть ли элемент которых хотим удалить
    if (!deleteDoc) {
      throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }
  // получить продукт по id
  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {
    return this.reviewService.findByProductId(productId);
  }
}
