import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { routerClassesModule } from './classes.routing';
import { CalendarModule } from 'angular-calendar';


@NgModule({
  imports: [
    BrowserModule, CommonModule,
    routerClassesModule,
    CalendarModule.forRoot()
  ],
  declarations: [ClassesComponent],
  exports: [ClassesComponent]
})
export class ClassesModule {}
