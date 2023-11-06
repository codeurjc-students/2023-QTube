import { Component, Input } from '@angular/core';

import { toast } from '../../../core/toasts/toasts';
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
      next: () => {
        toast.fire({
          icon: 'success',
          title: 'Video succesfully deleted!',
        });
      },
      error: () => {
        toast.fire({
          icon: 'error',
          title: 'Error deleting video!',
        });
      },
    });
  }
}
