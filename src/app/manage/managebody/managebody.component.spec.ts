import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebodyComponent } from './managebody.component';

describe('ManagebodyComponent', () => {
  let component: ManagebodyComponent;
  let fixture: ComponentFixture<ManagebodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagebodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
