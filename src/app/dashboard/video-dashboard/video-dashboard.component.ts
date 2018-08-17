import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Video } from '../../app-types';
import { VideoDataService } from '../../video-data.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: Video | undefined;
  videoList: Observable<Video[]>;

  constructor(videoSvc: VideoDataService) {
    this.videoList = videoSvc.loadVideos().pipe(
      tap(videos => this.selectedVideo = videos[0])
    );
  }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
  }

}
