import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DrawerComponent } from './drawer.component';
import { BrandModule } from 'src/app/shared/components/brand/brand.module';
import { RoundedIconModule } from 'src/app/shared/components/rounded-icon/rounded-icon.module';
import { HorizontalContentModule } from 'src/app/shared/components/horizontal-content/horizontal-content.module';

@NgModule({
  declarations: [DrawerComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrandModule,
    RoundedIconModule,
    HorizontalContentModule,
  ],
  exports: [DrawerComponent],
})
export class DrawerModule {}
