import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drawer-list',
  templateUrl: './drawer-list.component.html',
  styleUrls: ['./drawer-list.component.css'],
})
export class DrawerListComponent {
  @Input()
  list: { svg: string; link: string }[] = [];
}
