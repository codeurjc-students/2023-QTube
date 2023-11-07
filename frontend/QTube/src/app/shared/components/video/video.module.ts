import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VideoComponent } from './video.component';
import { DialogModule } from 'src/app/shared/components/dialog/dialog.module';
import { RoundedIconModule } from 'src/app/shared/components/rounded-icon/rounded-icon.module';
import { HorizontalContentModule } from 'src/app/shared/components/horizontal-content/horizontal-content.module';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    DialogModule,
    HttpClientModule,
    RoundedIconModule,
    HorizontalContentModule,
  ],
  exports: [VideoComponent],
})
export class VideoModule {}
