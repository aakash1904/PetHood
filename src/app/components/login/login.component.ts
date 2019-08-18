import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    details : this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  });

  constructor(private fb: FormBuilder, private http: HttpClient , private router : Router , private userService : UserService) { }

  ngOnInit() {
  }

  login() {
    const formData = this.loginForm.getRawValue();
    const body = formData.details;
    console.log(body);
    this.userService.login(body);
    
  }

}
