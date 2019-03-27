import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routerAboutModule } from './about.routing';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [CommonModule, routerAboutModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule {}
