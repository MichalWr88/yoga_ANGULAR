import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';


const routesConfig: Routes = [{ path: 'blog', component: BlogComponent }];

export const routerBlogModule = RouterModule.forChild(routesConfig);
