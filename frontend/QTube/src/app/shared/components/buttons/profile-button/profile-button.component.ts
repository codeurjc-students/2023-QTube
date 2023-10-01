import { Component, Input } from '@angular/core';
import { IMAGE_PATH } from '../../../../core/constants/imagePaths';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css'],
})
export class ProfileButtonComponent {
  readonly imgPath = IMAGE_PATH;

  @Input()
  img = '';

  @Input()
  classes = '';
}
