import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../app-types';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {
  @Input() video: Video | undefined;
  @Input() selected = false;

  constructor() { }

  ngOnInit() {
  }

}
