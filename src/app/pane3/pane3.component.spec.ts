import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pane3Component } from './pane3.component';

describe('Pane3Component', () => {
  let component: Pane3Component;
  let fixture: ComponentFixture<Pane3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pane3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pane3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
