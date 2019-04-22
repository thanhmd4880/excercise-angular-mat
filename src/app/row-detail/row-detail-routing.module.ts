import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RowInformationDetailComponent} from './row-information-detail/row-information-detail.component';

const routes: Routes = [
  {path: '', component: RowInformationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RowDetailRoutingModule { }
