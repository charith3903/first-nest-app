import { Controller, Get , Body , Post, Query , Param } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto'; 
import { SumServiceService } from './sum-service/sum-service.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sumservice: SumServiceService,
    
    ) {}
  



  @Get(':id')
  getRouteParam(@Param('id') userId): string {
    return '';
  }

  @Get('/sum')
  getSum(
    @Query('num1') a,
    @Query('num2') b
  ){
    return this.sumservice.getSum(a,b);
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


