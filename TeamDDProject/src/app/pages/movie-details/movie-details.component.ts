import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movieService/movie-service.service';
import { MovieDetails } from 'src/app/services/interface/movie-details-interface';
import { MatDialog } from '@angular/material/dialog';
import { YoutubePlayerComponent } from '../youtube-player/youtube-player.component';
import { YouTubePlayer } from '@angular/youtube-player';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  // @Input() movie !: Movie;
  @ViewChild(YouTubePlayer, {static:true})
  private youtubePlayer!: YouTubePlayer;

  movieId!: number;
  movieDetails!: MovieDetails;

  constructor(
    private movieService: MovieServiceService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    console.log(
      'Activated route data in Component:::',
      this.route.data
    );
    this.route.data.subscribe((data: any) => {
      this.movieDetails = data['movies'];
    });
    this.route.paramMap.subscribe((data: any) => {
      console.log("printing params")
      console.log(data.get('id'))
      this.movieService.getVideosById(data.get('id')!).subscribe()
    })
  }

  goToPlayer(videoId: number): void {
    console.log('goToPlayer')
    this.route.paramMap.subscribe((data) => {
      this.movieService.getVideosById(videoId).subscribe();
    });

    this.movieService.MovieVideos$.subscribe((movieVideos) =>{
      console.log('movieVideos')
      console.log(movieVideos);
      this.dialog.open(YoutubePlayerComponent,{
        data:{
          videos: movieVideos
        }
      })
      console.log('print Movievideo');
      console.log(movieVideos)
    })
  }
}
