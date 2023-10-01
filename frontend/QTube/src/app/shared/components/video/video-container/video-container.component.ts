import { Component, Input } from '@angular/core';
import { IMAGE_PATH } from 'src/app/core/constants/imagePaths';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css'],
})
export class VideoContainerComponent {
  readonly imagePath = IMAGE_PATH;

  @Input()
  videoImage = '';

  @Input()
  duration = '';

  @Input()
  channelImage = '';

  @Input()
  title = '';

  @Input()
  channel = '';

  @Input()
  views = '';

  @Input()
  ago = '';
}
