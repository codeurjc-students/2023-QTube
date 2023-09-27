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
    const drawerWrapper = document.querySelector('#drawer') as HTMLElement;
    const drawer = document.querySelector('#drawer > div') as HTMLElement;
    drawer.classList.toggle('w-drawer');
    drawerWrapper.classList.toggle('w-drawer');
    drawer.classList.toggle('w-drawer-xs');
    drawerWrapper.classList.toggle('w-drawer-xs');
  }
}
