import { Component, Input } from '@angular/core';
import { SVG_PATH } from '../../../../core/constants/imagePaths';

@Component({
  selector: 'app-drawer-playlist',
  templateUrl: './drawer-playlist.component.html',
  styleUrls: ['./drawer-playlist.component.css'],
})
export class DrawerPlaylistComponent {
  readonly svgPath = SVG_PATH;

  @Input()
  title = '';

  @Input()
  link = '';
}
