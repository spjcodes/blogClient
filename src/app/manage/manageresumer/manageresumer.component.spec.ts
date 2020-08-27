import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageresumerComponent } from './manageresumer.component';

describe('ManageresumerComponent', () => {
  let component: ManageresumerComponent;
  let fixture: ComponentFixture<ManageresumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageresumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageresumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
