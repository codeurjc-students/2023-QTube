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
      link: '/subscriptions',
      title: 'Subscriptions',
    },
    {
      svg: 'tendencies.svg',
      link: '/tendencies',
      title: 'Tendencies',
    },
    {
      svg: 'playlists.svg',
      link: '/playlists',
      title: 'Playlists',
    },
  ];
}
