import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Recepten3Component } from './recepten3.component';

describe('Recepten3Component', () => {
  let component: Recepten3Component;
  let fixture: ComponentFixture<Recepten3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recepten3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recepten3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
