
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

  constructor(public route:Router) { }

  // // ngOnInit() {
  // //   this.getMovies();
  // // }

  // // getMovies(): void {
  // //   this.MovieService.getMovies()
  // //     .subscribe((data: Movie[]) => {
  // //       this.movies = data;
  // //     });

  // ngOnInit(): void {
  //   this.MovieService.getBooks().subscribe();
  //   this.MovieService.MovieList$.subscribe((data) => {
  //     this.movies = data;
  //   })
  // }

}

