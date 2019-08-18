import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterUser } from '../Models/register-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName :String = "";

  constructor( private http: HttpClient , private router : Router) { }

  register(body){
    this.http.post<any>('http://localhost:3000/auth/register', body).subscribe(
      (response) => {
        console.log(response);
        this.userName = response.name; 
        localStorage.setItem('token' , response.token);
        this.router.navigate(['/signinhome']);
      },
      (error: Error) => {console.log('error'); });  
  }

  login(body){
    this.http.post<any>('http://localhost:3000/auth/login', body).subscribe(
      (response) => {
        console.log(response);
        this.userName = response.name; 
        localStorage.setItem('token' , response.token);
        this.router.navigate(['/signinhome']);
      },
      (error: Error) => {console.log('error'); });  
  }

  get isAuthenticated(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }

}
