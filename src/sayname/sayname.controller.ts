import { Body, Controller, Get } from '@nestjs/common';
import { saynameDto } from 'src/dto/sayName.dto';

@Controller('sayname')
export class SaynameController {

    @Post
    sayMyName(@Body() name: saynameDto){
        return "my name is ${name.name}";
    }



}
