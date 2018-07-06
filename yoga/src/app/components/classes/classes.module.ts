import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { routerClassesModule } from './classes.routing';
import { CalendarModule } from 'angular-calendar';


@NgModule({
  imports: [CommonModule, routerClassesModule, CalendarModule.forRoot()],
  declarations: [ClassesComponent],
  exports: [ClassesComponent]
})
export class ClassesModule {}
