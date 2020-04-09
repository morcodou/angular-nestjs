import { QuotesController } from './quotes.controller';
import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Module({
    imports: [
    //   MongooseModule.forRoot(process.env.MONGO_URL, {
    //     useNewUrlParser: true,
    //   }),
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
