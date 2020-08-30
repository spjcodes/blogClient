import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditselfintroComponent } from './editselfintro.component';

describe('EditselfintroComponent', () => {
  let component: EditselfintroComponent;
  let fixture: ComponentFixture<EditselfintroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditselfintroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditselfintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
