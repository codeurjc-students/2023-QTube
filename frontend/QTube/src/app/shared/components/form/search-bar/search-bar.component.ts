import { Component } from '@angular/core';
import { SVG_PATH } from '../../../../core/constants/imagePaths';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  readonly svgPath = SVG_PATH;
}
