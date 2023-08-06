import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AdminComponent } from './admin/admin.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { AllBookingsComponent } from './all-bookings/all-bookings.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';
import { DateBookingsComponent } from './date-bookings/date-bookings.component';
import { GuestBookingsComponent } from './guest-bookings/guest-bookings.component';
import { HotelComponent } from './hotel/hotel.component';
import { HomeComponent } from './home/home.component';
import { ViewHotelComponent } from './view-hotel/view-hotel.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HotelBookingsComponent } from './hotel-bookings/hotel-bookings.component';
import { ListHotelsComponent } from './list-hotels/list-hotels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddHotelComponent,
    AdminComponent,
    AddRoomComponent,
    AllBookingsComponent,
    BookingsComponent,
    CustomerComponent,
    CustomerHistoryComponent,
    DateBookingsComponent,
    GuestBookingsComponent,
    HotelComponent,
    HomeComponent,
    ViewHotelComponent,
    UpdateUserComponent,
    UpdateHotelComponent,
    ReportsComponent,
    LoginComponent,
    RegisterComponent,
    HotelBookingsComponent,
    ListHotelsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
