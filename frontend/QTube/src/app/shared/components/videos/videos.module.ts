import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VideosComponent } from './videos.component';
import { VideoModule } from 'src/app/shared/components/video/video.module';

@NgModule({
  declarations: [VideosComponent],
  imports: [CommonModule, HttpClientModule, VideoModule],
  exports: [VideosComponent],
})
export class VideosModule {}
