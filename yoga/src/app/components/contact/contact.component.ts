import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';

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
      name: ['', Validators.required,Validators.mail],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
}
