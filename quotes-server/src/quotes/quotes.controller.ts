import { CreateQuoteDto } from './dtos/create-quotes.dto';
import { QuotesService } from './quotes.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';

@Controller('quotes')
export class QuotesController {

    constructor(private quotesService: QuotesService) {
    }

    @Get()
    getQuotes(): string {
        return this.quotesService.getQuotes();
    }

    @Post()
    createQuote(@Body() createQuoteDto: CreateQuoteDto): Quote {
        return this.quotesService.createQuote(createQuoteDto);
        // return this.quotesService.createQuote();
    }
}
