import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../../app-types';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: Video | undefined;
  videoList: Video[] = [];

  constructor(http: HttpClient) {
    http
      .get<Video[]>('https://api.angularbootcamp.com/videos')
      .subscribe(videos => {
        this.videoList = videos;
        this.selectedVideo = videos[0];
      });
  }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
  }

}
