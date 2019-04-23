import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import {GetList, IViewedItems, SetList} from '../reducers';
import {ElementService} from '../element-service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolBarComponent implements OnInit {
    searchInputControl: FormControl;
    isShowSearchInfo  = false;
    searchedItems = [];
    viewedItems$ = [];
    temp = [];
  constructor(private store: Store<IViewedItems>, private elementService: ElementService) {
      this.searchInputControl = new FormControl('');
  }

  ngOnInit() {
      this.store.select('test').subscribe( data => {
          this.viewedItems$ = data;
          this.temp = [...data];
      });

      this.searchInputControl.valueChanges.subscribe((change?) => {
          let searchItems = [];
          // let old
          if (change !== null && change !== undefined) {
              searchItems = this.temp.filter((item) => {
                  // tslint:disable-next-line:max-line-length
                  return item.title.toLowerCase().includes(change.toLowerCase()) || item.content.toLowerCase().includes(change.toLowerCase());
              });
              this.viewedItems$ = searchItems;
          }
      });

      this.elementService.get10LatestViewedElement().subscribe((data) => {
          // this.viewedItems$ = JSON.parse(data);
          console.log('data from loal storage', data);
          this.store.dispatch(new SetList(JSON.parse(data)));
      });
      this.store.dispatch(new GetList());
  }
    onClick() {
        this.isShowSearchInfo = !this.isShowSearchInfo;
    }
    onMouseLeave() {
        this.isShowSearchInfo  = false;
    }
    onSearch(valueSearch) {
        if (valueSearch && valueSearch.length > 0) {
            this.searchedItems = [valueSearch, ...this.searchedItems];
            if (this.searchedItems.length > 3) {
                this.searchedItems.length = 3;
            }
        }
    }

}
