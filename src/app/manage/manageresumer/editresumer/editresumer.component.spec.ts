import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditresumerComponent } from './editresumer.component';

describe('EditresumerComponent', () => {
  let component: EditresumerComponent;
  let fixture: ComponentFixture<EditresumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditresumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditresumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
