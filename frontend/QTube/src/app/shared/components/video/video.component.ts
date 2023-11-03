import { Component, Input } from '@angular/core';

import { VideoService } from '../../../core/services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent {
  @Input()
  title = '';

  @Input()
  slug = '';

  @Input()
  thumbnail = '';

  constructor(private _videoService: VideoService) {}

  delete() {
    this._videoService.delete(this.slug).subscribe({
      error: (error) => {
        console.error(error);
      },
    });
  }
}
