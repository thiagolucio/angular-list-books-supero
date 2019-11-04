import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import {
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatTooltipModule,
  MatDialogModule,
  MatListModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatSelectModule
  ],
  exports: [
    CommonModule,
    LayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatSelectModule
  ],
  declarations: [],
  providers: [MatDatepickerModule],
  entryComponents: []
})
export class MaterialModule { }
