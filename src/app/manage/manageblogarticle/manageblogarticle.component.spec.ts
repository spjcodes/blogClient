import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageblogarticleComponent } from './manageblogarticle.component';

describe('ManageblogarticleComponent', () => {
  let component: ManageblogarticleComponent;
  let fixture: ComponentFixture<ManageblogarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageblogarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageblogarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
