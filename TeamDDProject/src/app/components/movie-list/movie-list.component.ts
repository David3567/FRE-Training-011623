import { Component, OnInit } from '@angular/core';
import  { Movie } from '../../interface/movie-interface'
import { MovieServiceService } from '../../services/movie-service.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{
    movies : Movie[] = [];
    constructor(private movieService :MovieServiceService){ }

    ngOnInit(): void{
      this.movieService.getMovies().subscribe();
      this.movieService.MovieList$.subscribe((data) =>{
        this.movies = data;
      })
  }
}
