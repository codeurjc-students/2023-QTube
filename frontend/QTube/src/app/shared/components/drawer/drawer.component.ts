import { Component, OnInit } from '@angular/core';

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
}
