import { Component } from '@angular/core';

import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.css'],
})
export class OutComponent {
  constructor(private _navigationService: NavigationService) {}

  /**
   * Navigates back to the previous page using `NavigationSevice`.
   */
  back() {
    this._navigationService.back();
  }
}
