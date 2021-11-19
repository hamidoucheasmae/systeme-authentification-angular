import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import  {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthService } from './auth.service';
import { HomeService } from './home.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  AppRoutingModule

  ],
  providers: [AuthService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
