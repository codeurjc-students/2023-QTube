import { Component, Input } from '@angular/core';
import { SVG_PATH, IMAGE_PATH } from '../../../core/constants/imagePaths';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  type = '';

  buttonClasses: { [key: string]: string } = {
    brand: 'flex gap-[0.19rem] items-center justify-center',
    primary:
      'hover:bg-qt-gray-7 active:bg-qt-gray-8 bg-white rounded-full transition-colors',
    login:
      'flex items-center justify-center gap-2 py-2 pl-4 pr-6 transition-transform bg-transparent border rounded-full hover:bg-qt-blue-3 hover:border-qt-blue-3 active:bg-qt-blue-4 border-qt-gray-6',
    rounded:
      'flex items-center justify-center p-2 transition-colors duration-200 rounded-full',
    drawer:
      '@container/drawer-button w-full px-drawer-x py-drawer-y @nxs/drawer:flex @nxs/drawer:items-center @nxs/drawer:gap-[1.375rem] rounded-xl',
    mobileBar: 'w-full p-2 flex flex-col items-center gap-1',
    dialog: 'flex items-center w-full gap-4 px-5 py-2 transition-colors',
  };

  barTextClasses = 'font-[450] text-wrap line-clamp-1';

  textClasses: { [key: string]: string } = {
    link: 'text-sm font-medium underline text-qt-blue-2 line-clamp-1 text-wrap',
    brand: 'font-medium text-[1.375rem] tracking-tighter text-wrap',
    primary: 'font-semibold',
    login: 'text-qt-blue-2 text-sm font-[550]',
    drawer: `${this.barTextClasses} hidden @nxs/drawer-button:block text-sm`,
    mobileBar: `${this.barTextClasses} text-[10px]`,
  };

  @Input()
  additionalButtonClasses = '';

  @Input()
  additionalImgClasses = '';

  @Input()
  additionalTextClasses = '';

  @Input()
  img = '';

  @Input()
  svg = '';

  source(): string {
    if (this.img) {
      return IMAGE_PATH + this.img;
    }
    return SVG_PATH + this.svg;
  }

  @Input()
  alt = '';

  @Input()
  text = '';
}
