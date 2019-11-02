import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/services.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  bookData = [];

  constructor(
    breakpointObserver: BreakpointObserver,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private bookService: BookService,
    private _location: Location) {}

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    this.route.params.subscribe(params => {
      const idPayment = params['id'];
      this.bookService.getBookList()
        .subscribe((data: any) => {
          const paymentDetail = data.data.filter(payment => payment.id === idPayment);
          this.bookData = paymentDetail[0];
        });
    });
  }

  onClick() {
    this._location.back();
  }

}
