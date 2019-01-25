import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SauzenComponent } from './sauzen.component';

describe('SauzenComponent', () => {
  let component: SauzenComponent;
  let fixture: ComponentFixture<SauzenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SauzenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SauzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
