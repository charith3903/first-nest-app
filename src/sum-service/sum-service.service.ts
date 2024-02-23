import { Injectable } from '@nestjs/common';

@Injectable()
export class SumServiceService {
    getSum(a, b){
        return parseInt(a)+parseInt(b);
    }

}
