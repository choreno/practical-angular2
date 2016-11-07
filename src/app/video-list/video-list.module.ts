import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
    exports:[
    VideoListComponent
  ],

  declarations: [VideoListComponent],

})
export class VideoListModule { }
