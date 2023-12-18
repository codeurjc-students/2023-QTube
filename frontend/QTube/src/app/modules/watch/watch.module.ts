import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchComponent } from './pages/watch/watch.component';
import { VideoPlayerModule } from 'src/app/shared/components/video-player/video-player.module';

@NgModule({
  declarations: [WatchComponent],
  imports: [CommonModule, VideoPlayerModule],
  exports: [WatchComponent],
})
export class WatchModule {}
