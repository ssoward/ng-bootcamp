import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './app-types';
import { map } from '../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  vid?: Video;

  constructor(private http: HttpClient) { }

  setSelected(video: Video){
    this.vid = video;
    console.log(this.vid);
  }
  loadVideos() {
    return this.http.get<Video[]>('https://api.angularbootcamp.com/videos').pipe(
      map(videos => [...videos, {title: 'Added from map operator!', author: 'Joshua Demetri'}])
    );
  }
}
