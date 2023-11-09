import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OutComponent } from './pages/out/out.component';
import { OutRoutingModule } from './out-routing.module';
import { RoundedIconModule } from 'src/app/shared/components/rounded-icon/rounded-icon.module';
import { BrandModule } from 'src/app/shared/components/brand/brand.module';

@NgModule({
  declarations: [OutComponent],
  imports: [
    CommonModule,
    RouterModule,
    OutRoutingModule,
    RoundedIconModule,
    BrandModule,
  ],
  exports: [OutComponent],
})
export class OutModule {}
