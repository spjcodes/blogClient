import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageindexComponent } from './manageindex.component';

describe('ManageindexComponent', () => {
  let component: ManageindexComponent;
  let fixture: ComponentFixture<ManageindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
