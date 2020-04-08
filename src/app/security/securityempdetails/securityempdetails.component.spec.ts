import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityempdetailsComponent } from './securityempdetails.component';

describe('SecurityempdetailsComponent', () => {
  let component: SecurityempdetailsComponent;
  let fixture: ComponentFixture<SecurityempdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityempdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityempdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
