import { Component, Input } from '@angular/core';
import { SVG_PATH } from 'src/app/core/constants/imagePaths';

@Component({
  selector: 'app-login-cta',
  templateUrl: './login-cta.component.html',
  styleUrls: ['./login-cta.component.css'],
})
export class LoginCtaComponent {
  readonly svgPath = SVG_PATH;

  @Input()
  flavour = '';

  flavours: {
    [key: string]: {
      svg: string;
      alt: string;
      additionalImgClasses: string;
      title: string;
      text: string;
    };
  } = {
    subscriptions: {
      svg: 'subscriptions.svg',
      alt: 'Subscriptions',
      additionalImgClasses: '',
      title: 'Do not miss the new videos',
      text: 'Log in to see what is new on your favorite QTube channels',
    },
    watchLater: {
      svg: 'watch-later.svg',
      alt: 'Watch later',
      additionalImgClasses: '',
      title: 'Watch the videos you saved',
      text: 'Log in to watch your pending videos',
    },
    likedVideos: {
      svg: 'like-dislike.svg',
      alt: 'Like',
      additionalImgClasses: 'ml-4 rotate-180',
      title: 'Enjoy your favorite videos',
      text: 'Log in to watch the videos you liked',
    },
  };
}
