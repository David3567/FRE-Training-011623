import { Credits } from './../../../../service/interface/credits';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/service/interface/movie-interface';
import { MovieServiceService } from 'src/app/service/movies/movie-service.service';
import { Movie } from 'src/app/service/interface/movie-interface';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from './components/components/movie-dialog/movie-dialog.component';

import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})

export class MovieDetailComponent implements OnInit {
  // @Input() movie !: Movie;

  @ViewChild(YouTubePlayer, { static: true })
  private youTubePlayer!: YouTubePlayer;


  movies: MovieDetail = {
    adult: false,
    img: '',
    budget: 0,
    id: 0,
    language: '',
    title: '',
    description: '',
    popularity: 0,
    date: '',
    revenue: 0,
    runtime: 0,
    status: '',
    tagline: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
    poster_path: '',
  };
  pageNo !: string
  imageUrl !: string


  constructor(private movieService: MovieServiceService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.movieService.MovieDetail$.subscribe((data) => {
      this.movies = data;
    })
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params.get('id'))
      this.movieService.getMovieByID(params.get('id')!).subscribe()


      this.activatedRoute.paramMap.subscribe((params) => {
        // console.log(params);
        this.movieService.getMovieByID(params.get('id')!).subscribe()
      });
    });
    // this.movieService.getMovieByID(this.pageNo).subscribe();|| '{}'|| "646389"
  }

  //& ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Transfer data into dialog
  openDialog(videoId: string): void {
    const dialogRef = this.dialog.open(MovieDialogComponent, {
      data: {
        id: videoId, // get the if of this current video

        // movieVideos: this.movieVideos,
        // hasposter_img: this.hasposter_img,
        // hasbackdrop_img: this.hasbackdrop_img,
        // poster_img_high: this.poster_img_high,
        // backdrop_img_high: this.backdrop_img_high,
      },
      // backdropClass: 'backdropBackground',
      // panelClass: 'my-panel',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }



}


