import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-screen',
  templateUrl: './default-screen.component.html',
  styleUrls: ['./default-screen.component.css'],
})
export class DefaultScreenComponent {
  @Input() flavour = '';
}
