import { Component, Input } from '@angular/core';
import { SVG_PATH } from '../../../../core/constants/imagePaths';

@Component({
  selector: 'app-drawer-button',
  templateUrl: './drawer-button.component.html',
  styleUrls: ['./drawer-button.component.css'],
})
export class DrawerButtonComponent {
  readonly svgPath = SVG_PATH;

  @Input()
  img = '';

  @Input()
  link = '';

  @Input()
  title = '';
}
