import { Component, OnInit, EventEmitter } from '@angular/core';

import { Video } from '../video';


@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
  ,inputs: ['x']
  ,outputs: ['selectVideo']
})
export class VideoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Video){

    this.selectVideo.next(vid);
    
  }

  selectVideo = new EventEmitter(); 



}
