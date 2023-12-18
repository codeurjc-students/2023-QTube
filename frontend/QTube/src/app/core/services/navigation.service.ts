import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { Option } from 'src/app/core/models/option.model';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _options: Option[] = [];

  constructor(private _location: Location) {
    this._options.push(new Option('Home', 'home.svg', '/home'));
    this._options.push(new Option('Upload a video', 'upload.svg', '/new'));
  }

  get options(): Option[] {
    return this._options;
  }

  back() {
    this._location.back();
  }
}
