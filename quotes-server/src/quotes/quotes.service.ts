import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';
import { UpdateQuoteDto } from './dtos/update-quotes.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuotesService {

    constructor(@InjectModel('Quote') private readonly quoteModel: Model<Quote>) {
    }

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
        return this.quoteModel.find().exec();
    }

    createQuote(quote: Quote): Promise<Quote>  {
        return new this.quoteModel(quote).save();
    }

    getQuote(id: string): Quote {
        return this.quotes.find(quote => quote.id === id);
    }

    updateQuote(id: string, updateQuoteDto: UpdateQuoteDto): Quote {
        const data = this.quotes.find(quote => quote.id === id);
        data.title = updateQuoteDto.title ? updateQuoteDto.title : data.title;
        data.author = updateQuoteDto.author ? updateQuoteDto.author : data.author;
        return data;
    }

    deleteQuote(id: string): Quote {
        const quote = this.quotes.find(quote => quote.id === id);
        return quote;
    }
}
