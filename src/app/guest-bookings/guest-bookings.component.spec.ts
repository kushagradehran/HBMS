import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestBookingsComponent } from './guest-bookings.component';

describe('GuestBookingsComponent', () => {
  let component: GuestBookingsComponent;
  let fixture: ComponentFixture<GuestBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestBookingsComponent]
    });
    fixture = TestBed.createComponent(GuestBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
