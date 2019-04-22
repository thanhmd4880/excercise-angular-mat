import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RowDetailRoutingModule } from './row-detail-routing.module';
import {RowInformationDetailComponent} from './row-information-detail/row-information-detail.component';
import {MatIconModule, MatSelectModule, MatInputModule, MatButtonModule, MatListModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [RowInformationDetailComponent],
  imports: [
    CommonModule,
    RowDetailRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
  ]
})
export class RowDetailModule { }
