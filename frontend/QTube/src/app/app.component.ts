import { Component, OnInit } from '@angular/core';
import { VideoService } from './core/services/video.service';
import { Video } from './core/models/video.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VideoService],
})
export class AppComponent implements OnInit {
  title = 'QTube';

  public videos: Video[] = [];

  ngOnInit() {
    this.setVideos();
  }

  constructor(private _videoService: VideoService) {}

  setVideos() {
    this._videoService.videos().subscribe({
      next: (videos) => {
        this.videos = videos;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
