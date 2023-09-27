import { Component, Input } from '@angular/core';
import { SVG_PATH } from 'src/app/core/constants/imagePaths';

@Component({
  selector: 'app-login-cta',
  templateUrl: './login-cta.component.html',
  styleUrls: ['./login-cta.component.css'],
})
export class LoginCtaComponent {
  readonly svgPath = SVG_PATH;

  @Input()
  svg = '';

  @Input()
  title = '';

  @Input()
  text = '';
}
