import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';


const routes: Routes = [
  {path: '', component: BookListComponent, data: { animation: 'isLeft' } },
  { path: 'bookDetail/:id', component: BookDetailsComponent, data: { animation: 'isRight' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
