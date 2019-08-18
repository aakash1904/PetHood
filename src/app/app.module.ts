import { HomeroutingModule } from './shared-modules/home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationTopComponent } from './components/navigation-top/navigation-top.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninHomeComponent } from './components/signin-home/signin-home.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationTopComponent,
    RegisterComponent,
    SigninHomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HomeroutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
