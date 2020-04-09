import { CreateQuoteDto } from './dtos/create-quotes.dto';
import { QuotesService } from './quotes.service';
import { Controller, Get, Post, Body, Param, Put, Delete, Logger } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { UpdateQuoteDto } from './dtos/update-quotes.dto';


@ApiTags('quotes')
@Controller('quotes')
export class QuotesController {
    constructor(private quotesService: QuotesService) {
    }

    @Get()
    getQuotes(): Promise<Quote[]> {
        return this.quotesService.getQuotes();
    }

    @Get(':id')
    @ApiParam({ name: 'id' })
    getQuote(@Param('id') id): Promise<Quote> {
        return this.quotesService.getQuote(id);
    }

    @Post()
    createQuote(@Body() createQuoteDto: CreateQuoteDto): Promise<Quote> {
        return this.quotesService.createQuote(createQuoteDto);
    }

    @Put(':id')
    @ApiParam({ name: 'id' })
    updateQuote(@Param('id') id, @Body() updateQuoteDto: UpdateQuoteDto): Promise<Quote> {
        return this.quotesService.updateQuote(id, updateQuoteDto);
    }

    @Delete(':id')
    @ApiParam({ name: 'id' })
    deleteQuote(@Param('id') id): Promise<Quote> {
        return this.quotesService.deleteQuote(id);
    }
}
