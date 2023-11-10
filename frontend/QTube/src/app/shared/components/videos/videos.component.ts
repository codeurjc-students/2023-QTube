import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { VideoService } from 'src/app/core/services/video.service';
import { PreviewVideo } from 'src/app/core/models/previewVideo.model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers: [VideoService],
})
export class VideosComponent implements OnInit {
  videos$: Observable<PreviewVideo[]> = of([]);

  ngOnInit() {
    this._setVideos();

    this._videoService.videos$.subscribe((videos) => {
      this.videos$ = of(videos);
    });
  }

  constructor(private _videoService: VideoService) {}

  private _setVideos() {
    this._videoService.videos().subscribe({
      next: (videos) => {
        this.videos$ = of(videos);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
