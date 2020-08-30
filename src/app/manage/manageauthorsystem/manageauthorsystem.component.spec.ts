import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageauthorsystemComponent } from './manageauthorsystem.component';

describe('ManageauthorsystemComponent', () => {
  let component: ManageauthorsystemComponent;
  let fixture: ComponentFixture<ManageauthorsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageauthorsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageauthorsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
