import { Injectable } from '@angular/core';
import { BooklistInterface} from '../interfaces/booklist-interface';
import {Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly APIBOOLIST = `${environment.API}/livros`;
  constructor(private http: HttpClient) { }

  getBookList(): Observable<BooklistInterface[]> {
    return this.http.get<BooklistInterface[]>(this.APIBOOLIST)
      .pipe(
        tap(console.log));
  }

}
