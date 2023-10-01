import { Component, Input } from '@angular/core';
import { SVG_PATH } from '../../../../core/constants/imagePaths';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.css'],
})
export class RoundedButtonComponent {
  readonly svgPath = SVG_PATH;

  @Input()
  img = '';

  @Input()
  title = '';

  @Input()
  classes = '';
}
