import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {VideoRoutingModule} from './video-routing.module';
import { VideoComponent } from '../video/video.component';

@NgModule({
  declarations: [
    VideoComponent
  ],
  imports: [
    VideoRoutingModule,
    SharedModule,
  ],
  providers: [],
  exports: [
    VideoComponent,
  ],
  bootstrap: []
})
export class VideoModule { }
