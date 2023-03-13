

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/service/interface/movie-interface';
import { MovieServiceService } from 'src/app/service/movies/movie-service.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})



export class MovieItemComponent{
  // @Input() movie?: Movie = {} as Movie;
  // @Input() movie?: Movie;
  @Input() movie !: Movie;

  // movies: Movie[] = [];

  constructor(private movieService: MovieServiceService, private router: Router) { }

  onMovieDetailClick(){
    this.movie.isLoading = true;
    this.movieService.getMovieDetails(this.movie.id).subscribe(
      (data) => {
        this.movie = { ... this.movie, ...data };
        this.movie.isLoading = false;

        this.router.navigate(['/movies/', this.movie.id]);
      },
      (error) => {
        console.log('Error fetching movie details', error);
        this.movie.isLoading = false;
      }
    )
  }


}

