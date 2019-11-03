import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BooklistInterface } from '../../interfaces/booklist-interface';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookListArray = [];
  dataSource: any;
  data: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public displayedColumns: string[] = [
    'titulo',
    'isbn',
    'autor',
    'editora',
    'ano'
  ];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bringData();
  }

  bringData() {
    this.bookService.getBookList()
      .subscribe((res: any) => {
        this.bookListArray = res;
        console.log('Dados Carregados com sucesso!');
        this.dataSource = new MatTableDataSource(this.bookListArray);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }, error => {
        alert(error);
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export class BookListDataSource extends DataSource<any> {
  paginator: MatPaginator;
  sort: MatSort;
  filter: string;

  constructor(private bookService: BookService) {
    super();
  }
  connect(): Observable<BooklistInterface[]> {
    return this.bookService.getBookList();
  }
  disconnect() { }
}
