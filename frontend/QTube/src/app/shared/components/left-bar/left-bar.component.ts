import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../../core/services/navigation.service';
import { Option } from '../../../core/models/option.model';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css'],
  providers: [NavigationService],
})
export class LeftBarComponent implements OnInit {
  options: Option[] = [];

  constructor(private _navigationService: NavigationService) {}

  ngOnInit() {
    this.options = this._navigationService.options;
  }
}
