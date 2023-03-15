import { Credits } from './../../../../service/interface/credits';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/service/interface/movie-interface';
import { Video } from 'src/app/service/interface/video-interface';
import { MovieServiceService } from 'src/app/service/movies/movie-service.service';
import { Movie } from 'src/app/service/interface/movie-interface';
import { HttpClient } from '@angular/common/http';
// import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from './components/components/movie-dialog/movie-dialog.component';

import { YouTubePlayer } from '@angular/youtube-player';
import { MatDialog } from '@angular/material/dialog';

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
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.movieService.MovieDetail$.subscribe((data) => {
      console.log("printing data")
      this.movies = data;
      console.log(data)
    })
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log("printing params")
      console.log(params.get('id'))
      this.movieService.getMovieByID(params.get('id')!).subscribe()
    })

    // this.movieService.getMovieByID(this.pageNo).subscribe();|| '{}'|| "646389"
  }



  //& ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Transfer data into dialog

    openDialog(videoId: number): void {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.movieService.getVideoByID(videoId).subscribe();
      });
    
      this.movieService.MovieVideos$.subscribe((movieVideos) => {
        console.log('printing movieVideo');
        console.log(movieVideos);
        this.dialog.open(MovieDialogComponent, {
          data: {
            key: movieVideos[0].key // get the key of this current video
          }
        });
      });
    }
    


    // console.log("printing videoId")
    // console.log(videoId);

    // watchTrailer(movieId: number) {
    //   const apiKey = '71ae58e461ffed5e209b514a5f7ce380';
    //   const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

    //   this.http.get<any>(apiUrl).subscribe(data => {
    //     const youtubeId = data.results[0].key;
    //     const playerContainer = document.getElementById('player-container');
    //     this.player = new YT.Player(playerContainer, {
    //       height: '360',
    //       width: '640',
    //       videoId: youtubeId,
    //       playerVars: {
    //         autoplay: 1
    //       }
    //     });
    //   });
    // }


    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('The dialog was closed', result);
    // });
  }



