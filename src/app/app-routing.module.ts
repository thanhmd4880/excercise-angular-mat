import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'list/:id', loadChildren: './row-detail/row-detail.module#RowDetailModule'},
  {path: 'list', loadChildren: './row-list/row-list.module#RowListModule'},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
