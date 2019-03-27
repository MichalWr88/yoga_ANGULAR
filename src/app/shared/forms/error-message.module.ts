import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageService } from './error-message.service';
import { ErrorMessageComponent } from './error-message.component';
@NgModule({
  declarations: [ErrorMessageComponent],
  imports: [CommonModule],
  exports: [ErrorMessageComponent],
  providers: [ErrorMessageService]
})
export class ErrorMessageModule {}
