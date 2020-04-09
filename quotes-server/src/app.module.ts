import { QuotesService } from './quotes/quotes.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesController } from './quotes/quotes.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    QuotesController
  ],
  providers: [
    QuotesService,
    AppService
  ],
})
export class AppModule { }
