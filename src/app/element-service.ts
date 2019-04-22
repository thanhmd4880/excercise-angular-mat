import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';


export interface PeriodicElement {
  id: number;
  name: string;
  priority: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, priority: 123, name: 'Hydrogen asdhasdhkj ajsdhkjashdkja sdajsdha kjsd ajsdkhkajsdh asdj', weight: 1.0079, symbol: 'H'},
  {id: 2, priority: 100, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {id: 3, priority: 100, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {id: 4, priority: 50, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {id: 5, priority: 75, name: 'Boron', weight: 10.811, symbol: 'B'},
  {id: 6, priority: 80, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {id: 7, priority: 100, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {id: 8, priority: 85, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {id: 9, priority: 30, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {id: 10, priority: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor() { }

  getElements(): Observable< PeriodicElement[] >   {
    return of(ELEMENT_DATA);
  }
  getElementById(id): Observable< PeriodicElement >   {
    return of(ELEMENT_DATA.find((element) =>
      element.id === id
    ));
  }
    update10LatestViewedElement(data): Observable<number>  {
      // data are from ngrx-store
      localStorage.setItem('elements-data', JSON.stringify(data));
      return of(10);
    }
    get10LatestViewedElement(): Observable<string> {
        // data are from ngrx-store
        if (localStorage.getItem('elements-data')) {
            return of(localStorage.getItem('elements-data'));
        }
        return of('[]');
    }

}
