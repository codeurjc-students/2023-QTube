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

  @Input()
  type = '';

  buttonClasses: { [key: string]: string } = {
    drawer:
      '@container/drawer-button w-full px-drawer-x py-drawer-y @nxs/drawer:flex @nxs/drawer:items-center @nxs/drawer:gap-[1.375rem] rounded-xl',
    'mobile-bar': 'w-full p-2 flex flex-col items-center gap-1 bg-qt-black-2',
  };

  titleClasses: { [key: string]: string } = {
    drawer: 'hidden @nxs/drawer-button:block text-sm',
    'mobile-bar': 'text-[10px]',
  };
}
