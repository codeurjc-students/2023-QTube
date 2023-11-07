import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-content',
  templateUrl: './horizontal-content.component.html',
  styleUrls: ['./horizontal-content.component.css'],
})
export class HorizontalContentComponent {
  @Input()
  classes = '';

  @Input()
  flavour = '';

  flavours: { [key: string]: string } = {
    default:
      'gap-4 py-3 text-sm rounded-xl hover:bg-qt-gray active:bg-qt-gray-2',
    dialog: 'p-2 gap-2 hover:bg-qt-gray-10 active:bg-qt-gray-11',
  };

  @Input()
  src = '';

  @Input()
  alt = '';

  @Input()
  width = '';

  @Input()
  text = '';
}
