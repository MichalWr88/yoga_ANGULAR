import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainPicComponent } from './main-pic/main-pic.component';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBP9sAMCIjxjzpiLeOiP5V1d9CyMo18NLA'
    })
  ],
  declarations: [NavBarComponent, FooterComponent, MainPicComponent],
  exports: [NavBarComponent, FooterComponent, MainPicComponent]
})
export class SharedModule {}
