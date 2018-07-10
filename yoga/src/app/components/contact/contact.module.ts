import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { routerContactModule } from './contact.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, routerContactModule, ReactiveFormsModule],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule {}
