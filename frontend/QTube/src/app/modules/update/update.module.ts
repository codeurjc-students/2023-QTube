import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FilePondModule } from 'ngx-filepond';

import { UpdateComponent } from './pages/update/update.component';
import { VideoPlayerModule } from 'src/app/shared/components/video-player/video-player.module';

@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    VideoPlayerModule,
    FilePondModule,
    ReactiveFormsModule,
  ],
  exports: [UpdateComponent],
})
export class UpdateModule {}
