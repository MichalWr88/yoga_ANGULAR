import { Injectable } from '@angular/core';

@Injectable()
export class ErrorMessageService {
  constructor() {}

  getValidationMessage(validator: string, validatorValue?: any) {
    const messages = {
      required: 'pole jest wymagane',
      oneRequired: 'At least one field is required',
      minlength: `Min length is ${validatorValue.requiredLength} characters`,
      maxLength: `Max length is ${validatorValue.requiredLength} characters`,
      digits: 'Wpisz tylko cyfry',
      mailCheck: 'Wpisz poprawny adre email',
      email: 'Wpisz poprawny adres email'
    };
    return messages[validator];
  }
}
