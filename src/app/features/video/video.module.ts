import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import { VideoComponent } from '../video/video.component';

@NgModule({
  declarations: [
    VideoComponent
  ],
  imports: [
    SharedModule,
  ],
  providers: [],
  exports: [
    VideoComponent,
  ],
  bootstrap: []
})
export class VideoModule { }
