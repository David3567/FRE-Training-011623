import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/interface/movie-interface';
import { MovieServiceService } from 'src/app/movie-service.service';


@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit{
  name = "Angular";
  id = '315162'
  videos: Video[] = [];
  constructor(private movieService: MovieServiceService) {}
  ngOnInit() {
    // const tag = document.createElement("script");
    // tag.src = "https://www.youtube.com/iframe_api";
    // document.body.appendChild(tag);
    this.movieService.getVideosById(this.id).subscribe();
    this.movieService.VideoList$.subscribe((data: Video[]) => {
      this.videos = data;
      console.log('hhhhh')
    });
  }

}
