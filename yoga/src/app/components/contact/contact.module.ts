import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { routerContactModule } from './contact.routing';


@NgModule({
  imports: [CommonModule, routerContactModule],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule {}
