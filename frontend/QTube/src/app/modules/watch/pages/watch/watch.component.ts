import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { title } from 'src/app/core/constants/constants';

import { Video } from 'src/app/core/models/video.model';
import { VideoService } from 'src/app/core/services/video.service';

/**
 * This component is responsible for displaying a video.
 */
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
    private _activatedRoute: ActivatedRoute,
    private _titleService: Title
  ) {}

  ngOnInit() {
    this.init();
  }

  /**
   * Set the current video based on the 'slug' route parameter.
   *
   * Subscribes to changes in route parameters via ActivatedRoute, retrieves
   * the 'slug', and uses the videos service to fetch and assign the
   * corresponding video information to the component's 'video' property.
   *
   * Also sets the title of the page.
   */
  private init() {
    this._activatedRoute.params.subscribe((params) => {
      const slug = params['slug'];

      this._videosService.video(slug).subscribe((video) => {
        this.video = video;

        this._titleService.setTitle(this.video.title + ' / ' + title);
      });
    });
  }
}
