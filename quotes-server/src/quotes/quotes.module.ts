import { QuoteSchema } from './schemas/quote.schema';
import { QuotesController } from './quotes.controller';
import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Quote', schema: QuoteSchema },
    ]),
  ],
  controllers: [
    QuotesController
  ],
  providers: [
    QuotesService,
  ],
})
export class QuotesModule {

}
