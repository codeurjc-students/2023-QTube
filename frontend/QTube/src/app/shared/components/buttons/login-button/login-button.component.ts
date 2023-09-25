import { Component } from '@angular/core';
import { SVG_PATH } from 'src/app/core/constants/imagePaths';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css'],
})
export class LoginButtonComponent {
  readonly svgPath = SVG_PATH;
}
