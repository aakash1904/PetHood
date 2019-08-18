import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  latitude = 18.5204;
  longitude = 73.8567;
  hinjlatitude = 18.5913;
  hinjlongitude = 73.7389;
  bglrlatitude = 12.9716;
  bglrlongitude = 77.5946;
  bbsrlatitude = 20.2961;
  bbsrlongitude = 85.8245;

  constructor() { }

  ngOnInit() {
  }

}
