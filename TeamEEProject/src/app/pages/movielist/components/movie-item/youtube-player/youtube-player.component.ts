import { Component, Inject } from '@angular/core';
import { Video, MoviesService, Movie } from '../../../../../movies.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})

export class YoutubePlayerComponent {
  videos: Video[] = [];
  movieId!: number;

  constructor(
    //private youtubePlayer: YoutubePlayerComponent,
    private moviesService: MoviesService,
    private route: ActivatedRoute) {
      
    }

    ngOnInit(): void {
      //console.log('run')
      this.route.params.subscribe(params => {
        this.movieId = params['id'];
        console.log(this.movieId)
        this.moviesService.getVideosById(this.movieId).subscribe();
        this.moviesService.VideoList$.subscribe((data: Video[]) => {
          this.videos = data;
          console.log(this.videos)
        })
      });
    } 
}
