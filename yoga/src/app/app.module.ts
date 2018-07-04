import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClassesComponent } from './components/classes/classes.component';
import { InstructorsComponent } from './components/classes/instructors/instructors.component';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { routerModule } from './app.routing';
import { AboutModule } from './components/about/about.module';
import { MainComponent } from './components/main/main.component';
import { BlogModule } from './components/blog/blog.module';
import { ContactModule } from './components/contact/contact.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassesComponent,
    InstructorsComponent,
    PageNotFoundComponent,
    MainComponent
  ],
  imports: [BrowserModule, SharedModule, routerModule, AboutModule, BlogModule, ContactModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
