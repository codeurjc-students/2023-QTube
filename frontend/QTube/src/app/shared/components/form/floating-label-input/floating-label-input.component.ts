import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-floating-label-input',
  templateUrl: './floating-label-input.component.html',
  styleUrls: ['./floating-label-input.component.css'],
})
export class FloatingLabelInputComponent {
  @Input()
  type = '';

  @Input()
  name = '';

  @Input()
  isAligned = false;

  @Input()
  label = '';
}
