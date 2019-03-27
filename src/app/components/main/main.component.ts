import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showPic: Boolean = true;
  constructor(private router: Router) {
    router.events.subscribe(val => {
      // see also
      if (val instanceof NavigationEnd && (val.url.includes('contact') || val.url.includes('blog') )) {
        this.showPic = false;
      } else {
        this.showPic = true;
      }
      // console.log(val instanceof NavigationEnd)
      // console.log(val)
    });
  }

  ngOnInit() {
    console.log(this.router.url);
  }
}
