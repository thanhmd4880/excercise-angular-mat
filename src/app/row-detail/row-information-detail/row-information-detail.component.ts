import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {ElementService, PeriodicElement} from '../../element-service';
import {Observable} from 'rxjs';
import {Add, GetList, IViewedItems} from '../../reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-row-information-detail',
  templateUrl: './row-information-detail.component.html',
  styleUrls: ['./row-information-detail.component.scss']
})
export class RowInformationDetailComponent implements OnInit {
    periodicElement: PeriodicElement;
    viewedItems = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private elementService: ElementService,
    private store: Store<IViewedItems>,
  ) {

  }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');

      this.store.select('test').subscribe( data => {
          this.viewedItems = data;
          this.elementService.update10LatestViewedElement(this.viewedItems);
      });
      this.route.paramMap.pipe(
          switchMap((params: ParamMap) =>
              this.elementService.getElementById(+params.get('id')))
      ).subscribe((data) => {
          this.periodicElement = data;
          if (this.periodicElement) {
              // push the viewed items to the store
              this.updateNewViewedItem(this.periodicElement);
          }
      });

    // if (!isNaN(id) && id) {
    //   console.log(id);
    //   this.elementService.getElementById(id).subscribe((data) => {
    //       this.periodicElement = data;
    //   });
    // }
  }

  updateNewViewedItem(periodicElement) {
      this.store.dispatch(new Add(periodicElement.id, periodicElement.name, periodicElement.symbol));
  }
}
