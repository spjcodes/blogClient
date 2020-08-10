import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftareaComponent } from './leftarea.component';

describe('LeftareaComponent', () => {
  let component: LeftareaComponent;
  let fixture: ComponentFixture<LeftareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
