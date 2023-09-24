import { Component } from '@angular/core';
import { SVG_PATH } from '../../../../core/constants/imagePaths';

@Component({
  selector: 'app-drawer-footer',
  templateUrl: './drawer-footer.component.html',
  styleUrls: ['./drawer-footer.component.css'],
})
export class DrawerFooterComponent {
  readonly svgPath = SVG_PATH;
}
