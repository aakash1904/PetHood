import { RegisterComponent } from './../components/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { SigninHomeComponent } from '../components/signin-home/signin-home.component';
import { LoginComponent } from '../components/login/login.component';
import { TrackComponent } from '../components/track/track.component';


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home',
        component: HomeComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'signinhome',
      component: SigninHomeComponent
    },
    {
      path: 'track',
      component: TrackComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class HomeroutingModule {}
