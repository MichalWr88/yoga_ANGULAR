import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes.component';
import { InstructorsComponent } from './instructors/instructors.component';

const routesConfig: Routes = [
  {
    path: 'classes',
    component: ClassesComponent},
  { path: 'classes/instructors', component: InstructorsComponent }
];

export const routerClassesModule = RouterModule.forChild(routesConfig);
