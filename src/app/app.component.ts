import { Component } from '@angular/core';
import { Config } from './config.service';
import { Video } from './video';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {

  title = Config.TITLE_PAGE;

  videos: Array<Video>;

  constructor() {

    this.videos = [
      new Video(1, 'Test', 'www.test.com', 'test descrition'),
      new Video(2, 'test2', 'ww2.com')
    ]
  }

  onSelectVideo(video) {
    console.log(JSON.stringify(video));
  }

}
