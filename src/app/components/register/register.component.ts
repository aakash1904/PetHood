import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    details : this.fb.group({
      name : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      mobile_number : ['']
    })
  });

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  register() {
    const formData = this.registerForm.getRawValue();
    const body = formData.details;
    console.log(body);
    this.http.post('http://localhost:3000/auth/register', body).subscribe(
      (response: Response) => {console.log(response); },
      (error: Error) => {console.log('error'); });
  }

}
