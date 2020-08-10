import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceareaComponent } from './servicearea.component';

describe('ServiceareaComponent', () => {
  let component: ServiceareaComponent;
  let fixture: ComponentFixture<ServiceareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
