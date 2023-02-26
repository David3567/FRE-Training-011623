import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `

  // `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'router';

  pageNum = 0;
  name = '';
  page = 0;

  // @ViewChild(YouTubePlayer) youTubePlayer: YouTubePlayer;

  ngOnInit(): void {
    // this.youTubePlayer.stopVideo()
    // 'http://localhost:4200/product?pageNum=0'
  }
}
