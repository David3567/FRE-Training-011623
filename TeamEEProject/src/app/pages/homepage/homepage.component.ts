import { Component } from '@angular/core';
import { MoviesService, Movie } from '../../movies.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  movies! : Movie[];
  ngOnInit(): void {
    this.moviesService.movies$.subscribe((movies: Movie[]) => {
      this.movies = movies;
      console.log(this.movies)
    })
    this.moviesService.discoverMovies({page:2}).subscribe();
  }
  constructor(private moviesService: MoviesService) {
  }
}
