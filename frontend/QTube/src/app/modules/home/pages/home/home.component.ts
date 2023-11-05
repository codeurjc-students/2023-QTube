import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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
