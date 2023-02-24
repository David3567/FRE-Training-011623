import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../movie.interface';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$!: Subject<any>;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies$ = this.movieService.movies$
    this.movieService.getMovies().subscribe()
  }
}