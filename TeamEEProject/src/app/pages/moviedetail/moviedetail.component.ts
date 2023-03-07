import { Component } from '@angular/core';
import { Movie, movieCredit, movieDetail, moviePoster, MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent {
  moviedetail = {
    title: "",
    vote_average: 0,
    vote_count: 0,
    runtime: 0,
    genres: [],
    release_date: "",
    overview: "",
    backdrop_path:""
  }
  movieposter!:moviePoster
  moviecredits!:movieCredit[]

  ngOnInit():void {

  }

  constructor(private movieService:MoviesService) {
    this.movieService.movieDetail$.subscribe((movie:any) => {
      this.moviedetail = movie;
    })
    this.movieService.getMovieDetailById(668482).subscribe((movie:any) => console.log(movie))
    this.movieService.moviePoster$.subscribe((movie:any) => {
      this.movieposter = movie
    })
    this.movieService.getMoviePosterById(668482).subscribe((movie:any) => console.log(movie))
    this.movieService.movieCredits$.subscribe((movie:any) => this.moviecredits = movie);
    this.movieService.getMovieCreditsById(668482).subscribe((movie:any) => console.log(movie));
  }
  
}
