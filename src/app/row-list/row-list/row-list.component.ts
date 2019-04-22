import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort, MatTableDataSource} from '@angular/material';
import {ViewChild} from '@angular/core';
import {PeriodicElement} from '../../element-service';
import {ElementService} from '../../element-service';
@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.scss']
})
export class RowListComponent implements OnInit {
  listElements: PeriodicElement[];
  constructor(private elementService: ElementService) { }
  displayedColumns: string[] = ['select', 'stared', 'name', 'priority', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  selection = new SelectionModel<PeriodicElement>(true, []);
  selectedRowIndex = -1;
  @ViewChild(MatSort) sort: MatSort;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement) {
    // if (!row) {
    //   return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    // }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  ngOnInit() {
    this.elementService.getElements().subscribe((result) => {
      this.listElements = result;
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.listElements);
      this.selection = new SelectionModel<PeriodicElement>(true, []);
    });

    this.dataSource.sort = this.sort;
  }

    onclick() {
        console.log('test');
    }
    highlight(row) {
        this.selectedRowIndex = row.id;
    }
}
