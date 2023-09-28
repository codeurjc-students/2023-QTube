import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drawer-header',
  templateUrl: './drawer-header.component.html',
  styleUrls: ['./drawer-header.component.css'],
})
export class DrawerHeaderComponent {
  @Input()
  title = '';
}
