import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Add, GetList, IViewedItems, SetList} from '../reducers';
import {IViewedItem} from '../reducers';
import {Observable} from 'rxjs';
import {ElementService} from '../element-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  opened = true;
  menuItems: any[];
  zIndex = '-1';
  isShowSearchInfo  = false;
  searchInputControl: FormControl = new FormControl('');
  searchedItems = [];
  viewedItems$ = [];
  constructor(
      private store: Store<IViewedItems>,
      private elementService: ElementService,
  ) {

  }

  ngOnInit() {
  this.store.select('test').subscribe( data => {
      this.viewedItems$ = data;
  });

  this.searchInputControl.valueChanges.subscribe((change) => {
      let searchItems = [];
      // let old
      if (change !== null && change !== undefined && change.length > 0) {
          searchItems = this.viewedItems$.filter((item) => {
              return item.includes(change);
          });
          this.viewedItems$ = searchItems;
      }
  });

  this.elementService.get10LatestViewedElement().subscribe((data) => {
        // this.viewedItems$ = JSON.parse(data);
        console.log('data from loal storage', data);
        this.store.dispatch(new SetList(JSON.parse(data)));
    });

  this.menuItems =  [
      {
        itemIcon: 'dashboard',
        itemName: 'Dashboards'
      },
      {
        itemIcon: 'report',
        itemName: 'Reports'
      },
      {
        itemIcon: 'record_voice_over',
        itemName: 'Recordings'
      },
      {
        itemIcon: 'score',
        itemName: 'Agent Scorecards'
      },
      {
        itemIcon: 'account_circle',
        itemName: 'Users'
      },
      {
        itemIcon: 'group',
        itemName: 'Teams'
      },
      {
        itemIcon: 'pan_tool',
        itemName: 'Skills'
      }
    ];

  this.store.dispatch(new GetList());
  }

  toggleSidebarFolded() {
    console.log('Click');
    this.opened = !this.opened;
  }
  onBlur(searchSection: HTMLDivElement) {
    if (this.zIndex !== '-1') {
      this.zIndex = '-1';
    }
    this.isShowSearchInfo = false;
  }

  onClick() {
    // if (this.zIndex !== '999') {
    //   this.zIndex = '999';
    // }
    // this.isShowSearchInfo =
    this.isShowSearchInfo = !this.isShowSearchInfo;
  }

  onMouseLeave(searchInfo: HTMLDivElement) {
    this.isShowSearchInfo  = false;
  }

  onValueChange(value) {
    console.log(value);
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
