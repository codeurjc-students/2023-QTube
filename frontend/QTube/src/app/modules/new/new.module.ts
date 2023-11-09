import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FilePondModule, registerPlugin } from 'ngx-filepond';
import * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
registerPlugin(FilePondPluginFileValidateType);

import { NewComponent } from './new.component';
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
