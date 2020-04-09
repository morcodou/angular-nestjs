import { QuotesService } from './quotes/quotes.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesController } from './quotes/quotes.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/quotes', {
      useNewUrlParser: true,
    })
  ],
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
