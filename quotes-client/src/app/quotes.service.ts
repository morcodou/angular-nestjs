import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { Quote } from './quotes/quote';
import { Observable } from 'rxjs';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Quote[]> {
    return this.http
      .get<Quote[]>(`${baseUrl}/quotes`)
      .pipe(tap(data => console.log('Quotes :', data)));
  }

  getQuote(id: string): Observable<Quote> {
    return this.http
      .get<Quote>(`${baseUrl}/quotes/${id}`)
      .pipe(tap(data => console.log('Quote:', data)));
  }

  createQuote(quote: Quote) : Observable<Quote>{
    return this.http
      .post<Quote>(`${baseUrl}/quotes`, quote)
      .pipe(tap(data => console.log('Create Quote:', data)));
  }

  updateQuote(id: string, quote: Quote) : Observable<Quote>{
    return this.http
      .put<Quote>(`${baseUrl}/quotes/${id}`, quote)
      .pipe(tap(data => console.log('Updatw Quote:', data)));
  }
}
