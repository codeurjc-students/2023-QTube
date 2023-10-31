import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private _httpClient: HttpClient) {}

  videos(): Observable<Video[]> {
    const url = 'videos';
    return this._httpClient.get<Video[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        throw new Error(error.message);
      })
    );
  }
}
