import { Injectable, NotFoundException } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';
import { UpdateQuoteDto } from './dtos/update-quotes.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuotesService {

    constructor(@InjectModel('Quote') private readonly quoteModel: Model<Quote>) {
    }

    async getQuotes(): Promise<Quote[]> {
        return await this.quoteModel.find().exec();
    }

    async createQuote(quote: Quote): Promise<Quote> {
        return await new this.quoteModel(quote).save();
    }

    async getQuote(id: string): Promise<Quote> {
        try {
            return await this.quoteModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Quote not found');
        }
    }

    async updateQuote(id: string, updateQuoteDto: UpdateQuoteDto): Promise<Quote> {
        return await this.quoteModel.findByIdAndUpdate(id, updateQuoteDto, { new: true });
    }

    async deleteQuote(id: string): Promise<Quote> {
        return await this.quoteModel.findByIdAndRemove(id);
    }
}
