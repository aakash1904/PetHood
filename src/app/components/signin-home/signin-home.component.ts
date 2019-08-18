import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin-home',
  templateUrl: './signin-home.component.html',
  styleUrls: ['./signin-home.component.css']
})
export class SigninHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService : UserService ,
    private router: Router) { }

  ngOnInit() {
  }

  cardClick() {
    this.router.navigate(['track']);
  }

}
