import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditblogarticleComponent } from './editblogarticle.component';

describe('EditblogarticleComponent', () => {
  let component: EditblogarticleComponent;
  let fixture: ComponentFixture<EditblogarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditblogarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditblogarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
