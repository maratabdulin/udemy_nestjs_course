import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Body() dto: AuthDto) {
    // извлекаем Body из нашего запроса
  }

  @HttpCode(200) // передаем код 200 так как сущность не меняется
  @Post('login')
  async login(@Body() dto: AuthDto) {
    // извлекаем Body из нашего запроса
  }
}
