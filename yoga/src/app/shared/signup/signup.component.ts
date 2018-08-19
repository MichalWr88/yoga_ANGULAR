import { Component, OnInit } from '@angular/core';
import { ModalModule } from 'ngx-modal';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  showModal() {
    console.log('open');
  }
}
