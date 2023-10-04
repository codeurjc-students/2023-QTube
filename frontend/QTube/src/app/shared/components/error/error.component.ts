import { Component } from '@angular/core';
import { IMAGE_PATH } from '../../../core/constants/imagePaths';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
  readonly imagePath = IMAGE_PATH;
}
