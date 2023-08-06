import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateBookingsComponent } from './date-bookings.component';

describe('DateBookingsComponent', () => {
  let component: DateBookingsComponent;
  let fixture: ComponentFixture<DateBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateBookingsComponent]
    });
    fixture = TestBed.createComponent(DateBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
