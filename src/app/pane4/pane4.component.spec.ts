import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pane4Component } from './pane4.component';

describe('Pane4Component', () => {
  let component: Pane4Component;
  let fixture: ComponentFixture<Pane4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pane4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pane4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
