import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritylogbookComponent } from './securitylogbook.component';

describe('SecuritylogbookComponent', () => {
  let component: SecuritylogbookComponent;
  let fixture: ComponentFixture<SecuritylogbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritylogbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritylogbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
