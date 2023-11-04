import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, ButtonModule],
  exports: [ToastComponent],
})
export class ToastModule {}
