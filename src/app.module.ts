import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstCategoriesModule } from './first-categories/first-categories.module';

@Module({
  imports: [FirstCategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
