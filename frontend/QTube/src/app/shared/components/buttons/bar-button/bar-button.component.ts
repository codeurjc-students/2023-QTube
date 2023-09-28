import { Component, Input } from '@angular/core';
import { SVG_PATH } from '../../../../core/constants/imagePaths';

@Component({
  selector: 'app-bar-button',
  templateUrl: './bar-button.component.html',
  styleUrls: ['./bar-button.component.css'],
})
export class BarButtonComponent {
  readonly svgPath = SVG_PATH;

  @Input()
  title = '';
}
