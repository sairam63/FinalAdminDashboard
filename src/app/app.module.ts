import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BookingmanagmentComponent } from './bookingmanagment/bookingmanagment.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DashboardComponent,
    HomeComponent,
    BookingmanagmentComponent,
    ServicesComponent,
    LoginComponent,
    RegisterComponent,
    FilterPipe,
    




  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]

})
export class AppModule
 {
  constructor(private router: Router) {
    // console.log(this.router.config);

}
 }
