import { Component } from '@angular/core';
import { SVG_PATH } from 'src/app/core/constants/imagePaths';

@Component({
  selector: 'app-mobile-bar',
  templateUrl: './mobile-bar.component.html',
  styleUrls: ['./mobile-bar.component.css'],
})
export class MobileBarComponent {
  readonly svgPath = SVG_PATH;

  navigationElements = [
    {
      svg: 'home.svg',
      link: '/',
      title: 'Home',
    },
    {
      svg: 'subscriptions.svg',
      link: '',
      title: 'Subscriptions',
    },
    {
      svg: 'tendencies.svg',
      link: '',
      title: 'Tendencies',
    },
    {
      svg: 'watch-later.svg',
      link: '',
      title: 'Watch Later',
    },
  ];
}
