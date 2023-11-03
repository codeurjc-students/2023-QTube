import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Video } from '../models/video.model';

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
}
