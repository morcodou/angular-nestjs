import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';
import { UpdateQuoteDto } from './dtos/update-quotes.dto';

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

    updateQuote(id: string, updateQuoteDto: UpdateQuoteDto): Quote {
        const  data = this.quotes.find(quote => quote.id === id);
        data.title = updateQuoteDto.title ? updateQuoteDto.title : data.title;
        data.author = updateQuoteDto.author ? updateQuoteDto.author : data.author;
        return data;
    }

    deleteQuote(id: string): Quote {
        const  quote = this.quotes.find(quote => quote.id === id);
        return quote;
    }
}
