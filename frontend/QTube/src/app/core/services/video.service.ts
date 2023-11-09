import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { serialize } from 'object-to-formdata';

import { environment } from 'src/environments/environment';
import { Video } from 'src/app/core/models/video.model';
import { UploadVideo } from '../models/uploadVideo.model';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private readonly _api = environment.api;

  private _videos: BehaviorSubject<Video[]> = new BehaviorSubject<Video[]>([]);

  constructor(private _httpClient: HttpClient) {}

  videos(): Observable<Video[]> {
    const url = `${this._api}videos`;
    let videos: Observable<Video[]> = this._httpClient.get<Video[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        throw new Error(error.message);
      })
    );
    return videos;
  }

  get videos$(): Observable<Video[]> {
    return this._videos.asObservable();
  }

  delete(slug: string): Observable<Video[]> {
    const url = `${this._api}videos/${slug}`;
    return this._httpClient.delete<Video>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        throw new Error(error.message);
      }),
      switchMap(() => {
        return this.videos();
      }),
      tap((videos) => {
        this._videos.next(videos);
      })
    );
  }

  video(slug: string): Observable<Video> {
    const url = `${this._api}videos/${slug}`;
    let video = this._httpClient.get<Video>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        throw new Error(error.message);
      })
    );
    return video;
  }

  /**
   * Uploads a video to the server via an HTTP POST request using `serialize`
   * function to prepare files for transmission.
   *
   * @param uploadVideo - An object containing the information of the video to
   * be uploaded.
   * @returns An Observable that emits the server's response after uploading
   * the video.
   *
   * @throws Error - If an error occurs during the HTTP request, an exception
   * is thrown with the error message.
   */
  create(uploadVideo: UploadVideo) {
    const url = `${this._api}videos`;
    return this._httpClient.post<UploadVideo>(url, serialize(uploadVideo)).pipe(
      catchError((error: HttpErrorResponse) => {
        throw new Error(error.message);
      })
    );
  }
}
