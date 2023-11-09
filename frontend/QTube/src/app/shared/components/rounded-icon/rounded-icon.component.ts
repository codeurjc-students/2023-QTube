import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rounded-icon',
  templateUrl: './rounded-icon.component.html',
  styleUrls: ['./rounded-icon.component.css'],
})
export class RoundedIconComponent {
  @Input()
  classes = '';

  @Input()
  flavour = '';

  flavours: { [key: string]: string } = {
    default: 'hover:bg-qt-gray active:bg-qt-gray-2',
    shiny: 'hover:bg-qt-gray-2 active:bg-qt-gray-3',
  };

  @Input()
  src = '';

  @Input()
  alt = '';

  @Input()
  width = '';
}
