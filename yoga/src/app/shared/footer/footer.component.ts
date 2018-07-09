import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 10;
  constructor() {
            $(document).ready(function () {
              $('.slider').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3
              });
            });

  }

  ngOnInit() {}
}

