
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie-interface';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})



export class MovieItemComponent implements OnInit {
  @Input() movie?: Movie = {} as Movie;

  movies: Movie[] = [];

  constructor(private MovieService: MovieServiceService) { }

  // ngOnInit() {
  //   this.getMovies();
  // }

  // getMovies(): void {
  //   this.MovieService.getMovies()
  //     .subscribe((data: Movie[]) => {
  //       this.movies = data;
  //     });

  ngOnInit(): void {
    this.MovieService.getBooks().subscribe();
    this.MovieService.MovieList$.subscribe((data) => {
      this.movies = data;
    })
  }

}

