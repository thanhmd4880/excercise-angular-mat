import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MeterialModule} from './meterial/meterial.module';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatSortModule, MatListModule
} from '@angular/material';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { viewedItemReducer } from './reducers/viewed-item.reducer';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MeterialModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatCheckboxModule,
        MatSortModule,
        ReactiveFormsModule,
        FormsModule,
        MatDividerModule,
        StoreModule.forRoot({test: viewedItemReducer}),
        MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
