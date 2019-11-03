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

  BookId: any;
  bookDtDetails: any;

  constructor(
    private readonly route: ActivatedRoute,
    private bookService: BookService,
    private location: Location) {}

  ngOnInit() {
    this.getBookDetails();
  }

  getBookDetails() {
    this.route.params.subscribe(params => {
      const idBook = params.id;
      this.bookService.getBookList()
        .subscribe((data: any) => {
          // tslint:disable-next-line: triple-equals
          const BookDetails = data.filter((book: { id: number; }) => book.id == idBook);
          this.bookDtDetails = BookDetails[0];
          console.log('Detalhes do Livro carregado com Sucesso', BookDetails);
        }, error => {
          alert(error);
        });
    });
  }

  onClick() {
    this.location.back();
  }

}
