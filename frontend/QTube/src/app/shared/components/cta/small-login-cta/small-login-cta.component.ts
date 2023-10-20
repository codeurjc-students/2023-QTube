import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-login-cta',
  templateUrl: './small-login-cta.component.html',
  styleUrls: ['./small-login-cta.component.css'],
})
export class SmallLoginCtaComponent {
  @Input()
  classes = '';
}
