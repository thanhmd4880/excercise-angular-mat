import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RowListComponent} from './row-list/row-list.component';

const routes: Routes = [
  {
    path: '',
    component: RowListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RowListRoutingModule { }
