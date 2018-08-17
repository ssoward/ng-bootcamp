import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Video } from '../app-types';
import {forEach} from '../../../node_modules/@angular/router/src/utils/collection';

const API_URL = 'https://api.angularbootcamp.com';

// Or connect to the hosted demo API (works from StackBlitz):
// const API_URL = 'https://api.angularbootcamp.com';

export interface Employee {
  first_name: string;
  last_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideoLoadingService {

  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(API_URL + '/videos')
      .pipe(
        // map(videos => [...videos, {'title':'test', 'author':'scott'}]),
        map(videos => videos.slice(0, 6)),
        map(videos => {
          for (const v of videos) {
            v.title = v.title.toLowerCase();
            v.author = '(By: ' + v.author + ')';
          }
          return videos;
        }),
      );
  }
}
