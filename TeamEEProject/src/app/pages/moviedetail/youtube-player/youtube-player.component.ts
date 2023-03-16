import { Component, Inject, OnInit } from '@angular/core';
import { Video, MoviesService, Movie } from '../../../movies.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})

export class YoutubePlayerComponent implements OnInit {
  videos: Video[] = [];
  movieId!: number;
  key!: string;

  constructor(
    //private youtubePlayer: YoutubePlayerComponent,
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<YoutubePlayerComponent>) {  
    }

    ngOnInit(): void {
      //console.log('run')'
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.route.params.subscribe(params => {
        this.movieId = params['id'];
        console.log(this.movieId)
        this.moviesService.getVideosById(this.movieId).subscribe();
        this.moviesService.VideoList$.subscribe((data: Video[]) => {
          this.videos = data;
          this.key = this.videos[0].key;
        })
      });
    } 


  onClose(): void {
    this.dialogRef.close();
  }
}
