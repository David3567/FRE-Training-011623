import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/service/interface/movie-interface';
import { MovieServiceService } from 'src/app/service/movies/movie-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
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
    vote_count: 0
  };
  pageNo !: string

  constructor(private movieService :MovieServiceService, private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void{
    this.movieService.MovieDetail$.subscribe((data) =>{
      this.movies = data;
    })
    this.activatedRoute.paramMap.subscribe((params) => {
      // console.log(params);
      this.movieService.getMovieByID(params.get('id')!).subscribe()
    })
    // this.movieService.getMovieByID(this.pageNo).subscribe();
  }
}
