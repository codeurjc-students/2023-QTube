import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FilePondModule } from 'ngx-filepond';

import { NewComponent } from './pages/new/new.component';
import { BrandModule } from 'src/app/shared/components/brand/brand.module';

@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    BrandModule,
    RouterModule,
    FilePondModule,
    ReactiveFormsModule,
  ],
  exports: [NewComponent],
})
export class NewModule {}
