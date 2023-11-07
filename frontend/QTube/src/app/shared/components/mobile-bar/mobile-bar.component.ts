import { Component } from '@angular/core';

import { NavigationService } from 'src/app/core/services/navigation.service';
import { Option } from 'src/app/core/models/option.model';

@Component({
  selector: 'app-mobile-bar',
  templateUrl: './mobile-bar.component.html',
  styleUrls: ['./mobile-bar.component.css'],
})
export class MobileBarComponent {
  options: Option[] = [];

  constructor(private _navigationService: NavigationService) {}

  ngOnInit() {
    this.options = this._navigationService.options;
  }
}
