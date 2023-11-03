import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-bar',
  templateUrl: './mobile-bar.component.html',
  styleUrls: ['./mobile-bar.component.css'],
})
export class MobileBarComponent {
  navigationElements = [
    {
      svg: 'home.svg',
      link: '/',
      title: 'Home',
    },
    {
      svg: 'upload.svg',
      link: '/upload',
      title: 'Upload a video',
    },
  ];
}
