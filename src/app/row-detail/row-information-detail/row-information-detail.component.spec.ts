import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowInformationDetailComponent } from './row-information-detail.component';

describe('RowInformationDetailComponent', () => {
  let component: RowInformationDetailComponent;
  let fixture: ComponentFixture<RowInformationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowInformationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowInformationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
