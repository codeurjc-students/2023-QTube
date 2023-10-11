import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-screen',
  templateUrl: './form-screen.component.html',
  styleUrls: ['./form-screen.component.css'],
})
export class FormScreenComponent {
  @Input()
  title = '';

  @Input()
  subtitle = '';

  @Input()
  footer = false;

  @Input()
  flavour = '';
}
