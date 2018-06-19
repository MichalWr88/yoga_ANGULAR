import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainPicComponent } from './main-pic/main-pic.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavBarComponent, FooterComponent, MainPicComponent],
  exports: [NavBarComponent, FooterComponent, MainPicComponent]
})
export class SharedModule {}
