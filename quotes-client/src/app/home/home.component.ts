import { Quote } from './../quotes/quote';
import { QuotesService } from './../quotes.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: Observable<Quote>;
  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
    this.quote = this.quotesService.getQuote('5e8f78d50f707e2944de8ae2');
  }

}
