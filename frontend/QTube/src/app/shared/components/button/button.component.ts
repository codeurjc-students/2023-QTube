import { Component, Input } from '@angular/core';

import { IMAGE_PATH, SVG_PATH } from 'src/app/core/constants/constants';

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
    'left-bar':
      'flex flex-col items-center justify-center gap-1 rounded-xl w-16 h-20',
    drawer: 'w-full p-3 flex items-center gap-[27px] rounded-xl',
    mobileBar: 'w-full p-2 flex flex-col items-center gap-1',
    dialog: 'flex items-center w-full gap-4 px-5 py-2 transition-colors',
  };

  barTextClasses = 'font-[450] text-wrap';

  textClasses: { [key: string]: string } = {
    link: 'text-sm font-medium underline line-clamp-1 text-wrap',
    brand: 'font-medium text-[1.375rem] tracking-tighter text-wrap',
    primary: 'font-semibold',
    login: 'text-qt-blue-2 text-sm font-[550]',
    'left-bar': `${this.barTextClasses} text-[11px] @nxs/left-bar-button:text-sm`,
    drawer: `${this.barTextClasses} text-sm`,
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
