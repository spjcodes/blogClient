import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootelComponent } from './footel.component';

describe('FootelComponent', () => {
  let component: FootelComponent;
  let fixture: ComponentFixture<FootelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
