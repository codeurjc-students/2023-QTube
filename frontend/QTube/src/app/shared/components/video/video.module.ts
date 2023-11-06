import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VideoComponent } from './video.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { DialogModule } from 'src/app/shared/components/dialog/dialog.module';

@NgModule({
  declarations: [VideoComponent],
  imports: [CommonModule, ButtonModule, DialogModule, HttpClientModule],
  exports: [VideoComponent],
})
export class VideoModule {}
