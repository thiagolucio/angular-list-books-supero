import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BooklistInterface } from '../../interfaces/booklist-interface';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Moment } from 'moment';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';


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
    'ano',
    'detalhes'
  ];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bringData();
    this.applyFilter(this.dataSource.filter);
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

  dataFilter = (d: Date): Date => {
    this.dataSource.filter = d.getFullYear();
    return this.dataSource.filter;
  }

  inputEvent(event) {
    // Return date object
    console.log(event.value);
  }
  changeEvent(event) {
    // Return date object
    console.log(event.value);
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
