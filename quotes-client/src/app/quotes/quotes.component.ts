import { QuotesService } from './../quotes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quotes: Observable<Quote[]>;
  subscription;

  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
    this.quotes = this.quotesService.getData();
  }

  getRandomColor() {
    const letters = '0123456789ABCDF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return { background: color };
  }
}
