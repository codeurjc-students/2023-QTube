import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '../button/button.module';

import { LeftBarComponent } from './left-bar.component';

@NgModule({
  declarations: [LeftBarComponent],
  imports: [CommonModule, ButtonModule],
  exports: [LeftBarComponent],
})
export class LeftBarModule {}
