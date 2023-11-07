import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-content',
  templateUrl: './vertical-content.component.html',
  styleUrls: ['./vertical-content.component.css'],
})
export class VerticalContentComponent {
  @Input()
  classes = '';

  @Input()
  flavour = '';

  flavours: { [key: string]: string } = {
    default: 'w-16 h-20 gap-1 rounded-xl hover:bg-qt-gray',
    mobile: 'w-full py-2 line-clamp-1',
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
