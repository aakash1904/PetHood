import { RegisterComponent } from './../components/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { SigninHomeComponent } from '../components/signin-home/signin-home.component';
import { LoginComponent } from '../components/login/login.component';


const routes: Routes = [
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
    path: '',
    component: HomeComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class HomeroutingModule {}
