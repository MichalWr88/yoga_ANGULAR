import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { routerContactModule } from './contact.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageModule } from '../../shared/forms/error-message.module';

@NgModule({
  imports: [CommonModule, routerContactModule, ReactiveFormsModule, ErrorMessageModule],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule {}
