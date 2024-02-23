import { Controller, Get , Body , Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto'; 
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(:id)
  getRouteParam(@Param('id') userId): string {
    return '';
  }

  @Get('/asksomething')
    askSomething() {
      return 'What do you want to know?';
    }
    @Post("/answer")
    answer(@Body() getAnswerDto:AnswerDto) {
      return {};
    }
}


