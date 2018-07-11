import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MyValidators } from '../../shared/forms/myValidators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  contatcForm: FormGroup;
  ngOnInit() {
    this.contatcForm = this._createForm();
  }
  _createForm() {
    return this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(100)])
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      subject: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(100)
        ])
      ],
      message: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(255)
        ])
      ]
    });
  }
}
