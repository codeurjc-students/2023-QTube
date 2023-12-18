import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LeftBarComponent } from './left-bar.component';
import { VerticalContentModule } from 'src/app/shared/components/vertical-content/vertical-content.module';
import { HorizontalContentModule } from '../horizontal-content/horizontal-content.module';

@NgModule({
  declarations: [LeftBarComponent],
  imports: [
    CommonModule,
    VerticalContentModule,
    RouterModule,
    HorizontalContentModule,
  ],
  exports: [LeftBarComponent],
})
export class LeftBarModule {}
