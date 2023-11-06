import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ButtonModule } from '../button/button.module';

import { LeftBarComponent } from './left-bar.component';

@NgModule({
  declarations: [LeftBarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterTestingModule,
    HttpClientTestingModule,
  ],
  exports: [LeftBarComponent],
})
export class LeftBarModule {}
