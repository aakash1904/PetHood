import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation-top',
  templateUrl: './navigation-top.component.html',
  styleUrls: ['./navigation-top.component.css']
})
export class NavigationTopComponent implements OnInit {

  constructor(private router: Router , private userService : UserService) { }

  ngOnInit() {
  }



}
