import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule
  ],
  declarations: [VideoDashboardComponent, VideoListComponent, StatFiltersComponent, VideoPlayerComponent, VideoCardComponent]
})
export class DashboardModule { }
