import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamController } from './exam/exam.controller';

@Module({
  imports: [],
  controllers: [AppController, ExamController],
  providers: [AppService],
})
export class AppModule {}
