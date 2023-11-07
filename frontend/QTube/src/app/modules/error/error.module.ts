import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorComponent } from './pages/error/error.component';
import { BrandModule } from 'src/app/shared/components/brand/brand.module';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, RouterModule, BrandModule],
  exports: [ErrorComponent],
})
export class ErrorModule {}
