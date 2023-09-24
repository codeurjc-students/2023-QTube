import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.css'],
})
export class RoundedButtonComponent {
  @Input()
  img = '';

  @Input()
  alt = '';
}
