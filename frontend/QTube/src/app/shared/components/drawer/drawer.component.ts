import { Component, OnInit, HostListener } from '@angular/core';

import { NavigationService } from 'src/app/core/services/navigation.service';
import { Option } from 'src/app/core/models/option.model';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit {
  options: Option[] = [];

  constructor(private _navigationService: NavigationService) {}

  ngOnInit() {
    this.options = this._navigationService.options;
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(targetElement: HTMLElement) {
    if (targetElement.classList.contains('drawer-toggler')) {
      const background = document.getElementById('background') as HTMLElement;
      const drawer = document.getElementById('drawer') as HTMLElement;

      background.classList.toggle('w-screen');
      background.classList.toggle('h-screen');
      background.classList.toggle('z-20');
      background.classList.toggle('opacity-0');
      drawer.classList.toggle('opacity-0');
      drawer.classList.toggle('-translate-x-full');
    }
  }
}
