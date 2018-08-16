import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Video } from '../../app-types';
import {VideoLoadingService} from '../video-loading.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: Video | undefined;
  // videoList: Video[] = [];
  videoList: Observable<Video[]>;

  constructor(svc: VideoLoadingService) {
    this.videoList = svc.loadVideos().pipe(
      tap( videos => {
        this.selectedVideo = videos[0];
      })
    );
  }
  // constructor(http: HttpClient) {
  //   http
  //     .get<Video[]>('https://api.angularbootcamp.com/videos')
  //     .subscribe(videos => {
  //       this.videoList = videos;
  //       this.selectedVideo = videos[0];
  //     });
  // }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
  }

}
