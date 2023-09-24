import { Component } from '@angular/core';
import { SVG_PATH } from '../../../core/constants/imagePaths';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent {
  readonly svgPath = SVG_PATH;
}
