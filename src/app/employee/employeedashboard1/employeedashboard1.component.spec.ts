import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeedashboard1Component } from './employeedashboard1.component';

describe('Employeedashboard1Component', () => {
  let component: Employeedashboard1Component;
  let fixture: ComponentFixture<Employeedashboard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Employeedashboard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Employeedashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
