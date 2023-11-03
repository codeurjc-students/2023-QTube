import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileBarComponent } from './mobile-bar.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [MobileBarComponent],
  imports: [CommonModule, ButtonModule],
  exports: [MobileBarComponent],
})
export class MobileBarModule {}
