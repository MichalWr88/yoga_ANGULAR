import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

const routesConfig: Routes = [{ path: 'contact', component: ContactComponent }];

export const routerContactModule = RouterModule.forChild(routesConfig);
