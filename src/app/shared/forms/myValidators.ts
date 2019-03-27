import {
  ValidatorFn,
  AbstractControl,
  Validators,
  FormGroup
} from '@angular/forms';

export class MyValidators {
         static digits(control: AbstractControl): { [key: string]: any } {
           const value = control.value;
           if (!/^\d+$/.test(value)) {
             return { digits: true };
           }

           return null;
         }
         static startsWith(letter: string): ValidatorFn {
           return (control: AbstractControl): { [key: string]: any } => {
             if (control.value && !control.value.startsWith(letter)) {
               return { startsWith: letter };
             }
             return null;
           };
         }
         static digiCheck(control: AbstractControl): { [key: string]: any } {
           const value = control.value;
           if (!/[0-9]{11}/.test(value)) {
             return { digits: true };
           }
           return null;
         }
       }
