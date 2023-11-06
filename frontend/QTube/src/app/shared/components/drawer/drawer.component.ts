import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../../core/services/navigation.service';
import { Option } from '../../../core/models/option.model';

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
}
