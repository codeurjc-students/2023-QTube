import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Video } from 'src/app/core/models/video.model';
import { VideoService } from 'src/app/core/services/video.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css'],
  providers: [VideoService],
})
export class WatchComponent implements OnInit {
  video: Video = {} as Video;

  constructor(
    private _videosService: VideoService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      const slug = params['slug'];

      this._videosService.video(slug).subscribe((video) => {
        this.video = video;
      });
    });
  }
}
