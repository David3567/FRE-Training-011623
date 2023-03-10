import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/services/interface/movie-interface';
import { MovieServiceService } from 'src/app/services/movieService/movie-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
})
export class YoutubePlayerComponent implements OnInit {
  name = 'Angular';

  // id = 315162
  // id!: string;
  videos: Video[] = [];
  movieId!: number;
  constructor(
    private movieService: MovieServiceService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    console.log('run');
    // const tag = document.createElement("script");
    // tag.src = "https://www.youtube.com/iframe_api";
    // document.body.appendChild(tag);
    this.route.params.subscribe((params) => {
      this.movieId = params['id'];
      console.log(this.movieId);
      this.movieService.getVideosById(this.movieId).subscribe();
      this.movieService.VideoList$.subscribe((data: Video[]) => {
        this.videos = data;
        console.log(this.videos);
      });
    });
  }
}
