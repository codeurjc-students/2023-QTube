import { Component, Input } from '@angular/core';

import { VideoService } from '../../../core/services/video.service';
import { ToastService } from '../../../core/services/toast.service';

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

  constructor(
    private _videoService: VideoService,
    private _toastService: ToastService
  ) {}

  delete() {
    this._videoService.delete(this.slug).subscribe({
      next: () => {
        this._toastService.toast('Video successfully deleted');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
