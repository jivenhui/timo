import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pane1Component } from './pane1.component';

describe('Pane1Component', () => {
  let component: Pane1Component;
  let fixture: ComponentFixture<Pane1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pane1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pane1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
