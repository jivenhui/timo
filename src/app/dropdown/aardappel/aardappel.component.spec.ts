import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AardappelComponent } from './aardappel.component';

describe('AardappelComponent', () => {
  let component: AardappelComponent;
  let fixture: ComponentFixture<AardappelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AardappelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AardappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
