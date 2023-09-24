import { Component, Input } from '@angular/core';
import { IMAGE_PATH } from '../../../../core/constants/imagePaths';

@Component({
  selector: 'app-drawer-channel',
  templateUrl: './drawer-channel.component.html',
  styleUrls: ['./drawer-channel.component.css'],
})
export class DrawerChannelComponent {
  readonly imagePath = IMAGE_PATH;

  @Input()
  img = '';

  @Input()
  link = '';

  @Input()
  title = '';
}
