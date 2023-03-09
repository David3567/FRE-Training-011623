import { Credits } from './../../../../service/interface/credits';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/service/interface/movie-interface';
import { MovieServiceService } from 'src/app/service/movies/movie-service.service';
import { Movie } from 'src/app/service/interface/movie-interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})

export class MovieDetailComponent implements OnInit{
  // @Input() movie !: Movie;

  movies : MovieDetail = {
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


  constructor(private movieService :MovieServiceService, private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void{
    this.movieService.MovieDetail$.subscribe((data) =>{
      this.movies = data;
    })
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.movieService.getMovieByID(params.get('id')|| "646389").subscribe()
      this.imageUrl = `https://image.tmdb.org/t/p/w92/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg`;

      // this.imageUrl = `https://image.tmdb.org/t/p/w500${this.movies.poster_path}`;
    })
    // this.movieService.getMovieByID(this.pageNo).subscribe();|| '{}'|| "646389"
  }
}
