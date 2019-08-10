import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-top',
  templateUrl: './navigation-top.component.html',
  styleUrls: ['./navigation-top.component.css']
})
export class NavigationTopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }



}
