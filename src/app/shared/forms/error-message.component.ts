import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ErrorMessageService } from './error-message.service';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  @Input() control: FormGroup | FormControl;
  constructor(private _errorService: ErrorMessageService) {}

  get errorMessage() {
    for (const key in this.control.errors) {
      if (this.control.errors.hasOwnProperty(key) && this.control.touched) {
        return this._errorService.getValidationMessage(
          key,
          this.control.errors[key]
        );
      }
    }

    return null;
  }
}
