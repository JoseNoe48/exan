import { Controller, Get, Render } from '@nestjs/common';

@Controller('exam')
export class ExamController {
    @Get()
    @Render('exam')
    exam(){
        return[]
    }
}
