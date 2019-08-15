import { RegisterComponent } from './../components/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { SigninHomeComponent } from '../components/signin-home/signin-home.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
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
