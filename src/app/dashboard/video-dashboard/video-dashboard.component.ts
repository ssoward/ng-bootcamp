import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Video } from '../../app-types';

const API_URL = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})

export class VideoDashboardComponent implements OnInit {
  selectedVideo: Video | undefined;
  videoList: Video[] | undefined;

      constructor(http: HttpClient) {
    http
      .get<Video[]>(API_URL + '/videos')
      .subscribe(videos => {
        this.videoList = videos;
        this.selectedVideo = this.videoList[0];
    });
  }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
  }

}
