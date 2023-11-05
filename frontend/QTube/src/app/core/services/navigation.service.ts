import { Injectable } from '@angular/core';

import { Option } from '../../core/models/option.model';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _options: Option[] = [];

  constructor() {
    this._options.push(new Option('Home', 'home.svg', '/'));
    this._options.push(new Option('Upload a video', 'upload.svg', '/'));
  }

  get options(): Option[] {
    return this._options;
  }
}
