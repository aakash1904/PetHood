import { Component, OnInit, NgZone, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  windowWidth: number = window.innerWidth;
  hidden : boolean;
  constructor() { 
    this.hidden=false;
  }
  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
}
@HostListener('window:resize', ['$event'])
  resize(event) {
      this.windowWidth = window.innerWidth;
  }
  ngOnInit() {
  }

}
