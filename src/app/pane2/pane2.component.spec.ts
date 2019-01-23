import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pane2Component } from './pane2.component';

describe('Pane2Component', () => {
  let component: Pane2Component;
  let fixture: ComponentFixture<Pane2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pane2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pane2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
