import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MobileBarComponent } from './mobile-bar.component';
import { VerticalContentModule } from 'src/app/shared/components/vertical-content/vertical-content.module';

@NgModule({
  declarations: [MobileBarComponent],
  imports: [CommonModule, VerticalContentModule, RouterModule],
  exports: [MobileBarComponent],
})
export class MobileBarModule {}
