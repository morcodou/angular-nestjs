import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';

@Injectable()
export class QuotesService {

    quotes: Quote[] = [
        {
            id: '1',
            title: 'impossible',
            author: 'John'
        },
        {
            id: '2',
            title: 'No pressure',
            author: 'Thomas'
        },
        {
            id: '3',
            title: 'My life',
            author: 'Mahama'
        },
    ];

    getQuotes(): Quote[] {
        return this.quotes;
    }

    createQuote(quote: Quote): Quote {
        return quote;
    }

    getQuote(id: string): Quote {
        return this.quotes.find(quote => quote.id === id);
    }
}
