import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css'],
})
export class DefaultButtonComponent {
  @Input()
  flavour = '';

  @Input()
  text = '';

  @Input()
  classes = '';

  flavours: { [key: string]: string } = {
    primary:
      'font-bold py-3 transition-colors rounded-full text-qt-black-4 hover:bg-qt-gray-7 active:bg-qt-gray-8 bg-white',
    link: 'text-sm font-medium underline text-qt-blue-2',
  };
}
