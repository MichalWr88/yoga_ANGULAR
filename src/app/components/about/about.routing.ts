import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';


const routesConfig: Routes = [{ path: 'about', component: AboutComponent }];

export const routerAboutModule = RouterModule.forChild(routesConfig);