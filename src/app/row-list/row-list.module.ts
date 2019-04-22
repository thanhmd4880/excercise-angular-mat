import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RowListRoutingModule } from './row-list-routing.module';
import { RowListComponent } from './row-list/row-list.component';
import {MatCheckboxModule, MatIconModule, MatTableModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [RowListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatSortModule,
    RowListRoutingModule, //  remember to put feature module below the library module
  ]
})
export class RowListModule { }
