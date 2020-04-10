import { QuotesService } from './../quotes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.scss']
})
export class EditQuoteComponent implements OnInit {

  quote = {
    title: '',
    author: ''
  };
  id;

  constructor(
    private quotesService: QuotesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
      this.quotesService.getQuote(this.id).subscribe(data => this.quote = data);
    }
  }

  onSave(form) {
    console.log(form.value);
    const data = form.value;
    if (this.id) {
      this.quotesService.updateQuote(this.id, data).subscribe(d => {
        this.snackBar.open('Quote updated');
        console.log(d);
        this.router.navigateByUrl('/quotes');
      });
    }
    else {
      this.quotesService.createQuote(data).subscribe(d => {
        this.snackBar.open('Quote created');
        console.log(d);
        this.router.navigateByUrl('/quotes');
      });
    }
  }
}
