import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClassesComponent } from './components/classes/classes.component';
import { InstructorsComponent } from './components/classes/instructors/instructors.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { routerModule } from './app.routing';
import { AboutModule } from './components/about/about.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassesComponent,
    InstructorsComponent,
    ContactComponent,
    BlogComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, SharedModule, routerModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
