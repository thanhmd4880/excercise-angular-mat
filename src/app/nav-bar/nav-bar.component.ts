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
        itemIcon: 'dashboard',
        itemName: 'Reports'
      },
      {
        itemIcon: 'dashboard',
        itemName: 'Recordings'
      },
      {
        itemIcon: 'dashboard',
        itemName: 'Agent Scorecards'
      },
      {
        itemIcon: 'dashboard',
        itemName: 'Users'
      },
      {
        itemIcon: 'dashboard',
        itemName: 'Teams'
      },
      {
        itemIcon: 'dashboard',
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
