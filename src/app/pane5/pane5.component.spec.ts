import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pane5Component } from './pane5.component';

describe('Pane5Component', () => {
  let component: Pane5Component;
  let fixture: ComponentFixture<Pane5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pane5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pane5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
