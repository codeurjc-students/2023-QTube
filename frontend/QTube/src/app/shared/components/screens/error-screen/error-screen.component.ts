import { Component } from '@angular/core';
import { IMAGE_PATH } from '../../../../core/constants/imagePaths';

@Component({
  selector: 'app-error-screen',
  templateUrl: './error-screen.component.html',
  styleUrls: ['./error-screen.component.css'],
})
export class ErrorScreenComponent {
  readonly imagePath = IMAGE_PATH;
}
