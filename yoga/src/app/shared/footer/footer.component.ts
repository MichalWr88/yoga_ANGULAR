import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  title: string = 'Belle & Carrie Rehabilitation Yoga';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 14;
  constructor() {}

  ngOnInit() {}
}

