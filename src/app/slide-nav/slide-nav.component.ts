import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.scss']
})
export class SlideNavComponent implements OnInit {
    opened = true;
    menuItems: any[];
    @Input() slideNav: any;
  constructor() { }

  ngOnInit() {
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
  }

    toggleSidebarFolded() {
        console.log('Click');
        this.opened = !this.opened;
        this.opened ? this.slideNav.style.width = '200px' : this.slideNav.style.width = 'auto';
    }
}
