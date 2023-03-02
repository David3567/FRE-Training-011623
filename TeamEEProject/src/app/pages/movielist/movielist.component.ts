import { Component } from '@angular/core';
import { Movie, MoviesService } from '../../movies.service';


@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent {
  movies!:Movie[];
  ngOnInit():void{
    this.movieService.movies$.subscribe((movies:Movie[]) => {
      this.movies = movies;
      console.log(this.movies)
    })
    this.movieService.discoverMovies({page:3}).subscribe();
  }
  constructor(private movieService:MoviesService) {

  }
}
