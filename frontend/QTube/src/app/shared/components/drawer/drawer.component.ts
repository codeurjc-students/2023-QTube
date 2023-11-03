import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent {
  navigationElements = [
    {
      svg: 'home.svg',
      link: '/home',
      title: 'Home',
    },
    {
      svg: 'upload.svg',
      link: '/upload',
      title: 'Upload a video',
    },
  ];
}
