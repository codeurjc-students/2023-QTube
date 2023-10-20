import { Component } from '@angular/core';
import { SVG_PATH } from '../../../../core/constants/imagePaths';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent {
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
      title: 'Watch later',
    },
    {
      svg: 'liked.svg',
      link: '',
      title: 'Liked videos',
    },
  ];

  subscribedChannels = [
    {
      img: 'alva-majo.jpg',
      link: '',
      title: 'Alva Majo',
    },
    {
      img: 'antonio-sarosi.jpg',
      link: '',
      title: 'Antonio Sarosi',
    },
    {
      img: 'clavero.jpg',
      link: '',
      title: 'Clavero',
    },
    {
      img: 'el-rubius.jpg',
      link: '',
      title: 'elrubiusOMG',
    },
    {
      img: 'nifty.jpg',
      link: '',
      title: 'Nifty',
    },
  ];
}
