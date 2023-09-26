import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  /**
   * Toggles the appearance of a drawer element between two width states.
   * This function is designed to toggle between different CSS classes to
   * control the width of the drawer, effectively opening and closing it.
   */
  toggleDrawer() {
    const drawer = document.querySelector('#drawer') as HTMLElement;
    drawer.classList.toggle('max-w-[225px]');
    drawer.classList.toggle('max-w-[78px]');
  }
}
