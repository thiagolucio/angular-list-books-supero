import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from 'src/app/services/book.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  bookData = [];

  constructor(
    private readonly route: ActivatedRoute,
    private bookService: BookService,
    private location: Location) {}

  ngOnInit() {
    this.getBookDetails();
  }

  getBookDetails(): void {
    this.route.params.subscribe(params => {
      const idBook = params.id;
      this.bookService.getBookList()
        .subscribe((data: any) => {
          const bookDetail = data.filter(book => book.id === idBook);
          this.bookData = bookDetail[0];
          console.log('Dados detalhados', idBook, '/ BOOK DETAIL', bookDetail);
        });
    });
  }



  onClick() {
    this.location.back();
  }

}
