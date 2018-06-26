import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { routerBlogModule } from './blog.routing';


@NgModule({
  imports: [CommonModule, routerBlogModule],
  declarations: [BlogComponent],
  exports: [BlogComponent]
})
export class BlogModule {}
