import { Component, Input } from '@angular/core';

import { VideoService } from 'src/app/core/services/video.service';
import { NotificationService } from 'src/app/core/services/notification.service';

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
    private _notificationService: NotificationService
  ) {}

  delete() {
    this._notificationService.confirmOperationDialog(() =>
      this._videoService.delete(this.slug)
    );
  }
}
