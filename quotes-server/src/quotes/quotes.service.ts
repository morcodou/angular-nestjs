import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';

@Injectable()
export class QuotesService {

    getQuotes(): string {
        return 'hello from quotes service';
    }

    createQuote(quote: Quote): Quote {
        return quote;
    }
}
