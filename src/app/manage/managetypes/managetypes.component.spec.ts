import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetypesComponent } from './managetypes.component';

describe('ManagetypesComponent', () => {
  let component: ManagetypesComponent;
  let fixture: ComponentFixture<ManagetypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagetypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
