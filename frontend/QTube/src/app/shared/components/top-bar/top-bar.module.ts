import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './top-bar.component';
import { SearchBarModule } from 'src/app/shared/components/search-bar/search-bar.module';
import { BrandModule } from 'src/app/shared/components/brand/brand.module';
import { RoundedIconModule } from 'src/app/shared/components/rounded-icon/rounded-icon.module';

@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    SearchBarModule,
    BrandModule,
    RouterModule,
    RoundedIconModule,
  ],
  exports: [TopBarComponent],
})
export class TopBarModule {}
