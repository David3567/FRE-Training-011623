import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';
import { Cast } from 'src/app/services/interfaces/credit.interface';
import { MovieDetail } from 'src/app/services/interfaces/movie-detail.interface';
import { Backdrop, Poster } from 'src/app/services/interfaces/movie-image.interface';
import { Video } from 'src/app/services/interfaces/video.interface';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { YoutubeComponent } from './youtube/youtube.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @ViewChild(YouTubePlayer, { static: true }) youTubePlayer!: YouTubePlayer;

  hasPoster_img = true;
  hasBackdrop_img = true;
  poster_img_high = '';
  backdrop_img_high = '';
  type!: string | undefined;

  movie!: MovieDetail;
  movieVideos: Video[] = [];
  actors: Cast[] = [];
  posters: Poster[] = [];
  id!: number;

  constructor(
    private readonly tmdbService: TmdbService,
    private readonly activatedRoute: ActivatedRoute,
    public dialog: MatDialog) {}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
    })
    this.setSource();
    this.type = this.movie.genres?.map(({ name }) => name).join(',');

  }

  openNewTab(url: string) {
    window.open(url, "_blank");
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(YoutubeComponent, {
      data: {
        movieVideos: this.movieVideos,
        hasposter_img: this.hasPoster_img,
        hasbackdrop_img: this.hasBackdrop_img,
        poster_img_high: this.poster_img_high,
        backdrop_img_high: this.backdrop_img_high,
      },
      backdropClass: 'backdropBackground',
      panelClass: 'my-panel',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  private setSource() {
    this.tmdbService.getMovieInfo(this.id, 'videos').subscribe(videos => {
      console.log(videos)
      if (videos && videos.results) {
        this.movieVideos = [...videos.results];
      }
    });
    this.tmdbService.getMovieInfo(this.id).subscribe(movie => {
        this.movieVideos = movie;
    });
    this.tmdbService.getMovieInfo(this.id, 'credits').subscribe(actors => {
      this.actors = actors.map((actor: Cast): Cast => {
        const profile_path = actor.profile_path? this.tmdbService.getMovieImagePath(actor.profile_path, 'w500') : '';
        return {...actor, profile_path};
      })
    });
    this.tmdbService.getMovieInfo(this.id, 'images').subscribe(backdrops => {
      this.posters = backdrops.map((backdrop: Backdrop): Backdrop => {
        const file_path = backdrop.file_path? this.tmdbService.getMovieImagePath(backdrop.file_path, 'w500') : '';
        return {...backdrop, file_path};
      })
    });

    if (this.movie.backdrop_path) {
      this.hasBackdrop_img = true;
      this.backdrop_img_high = this.tmdbService.getMovieImagePath(
        this.movie.backdrop_path,
        'original'
      );
    } else {
      this.hasBackdrop_img = false;
    }

    if (this.movie.poster_path) {
      this.hasPoster_img = true;
      this.poster_img_high = this.tmdbService.getMovieImagePath(
        this.movie.poster_path,
        'w780'
      );
    } else {
      this.hasPoster_img = false;
    }
  }

}
