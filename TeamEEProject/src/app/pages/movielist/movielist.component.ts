import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie, MoviesService, popularMovie } from '../../movies.service';


@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent {
  movies!:Movie[];
  popularMovies!:popularMovie[];
  subpm = new Subscription();
  subpm$ = new Subscription();
  background = "";
  
  ngOnInit():void{
    this.movieService.movies$.subscribe((movies:Movie[]) => {
      this.movies = movies;
    })
    this.movieService.discoverMovies({page:3}).subscribe();
    this.subpm$ = this.movieService.popularmovies$.subscribe((movies:popularMovie[]) => {
      this.popularMovies = movies;
      if (movies.length > 0) {
        this.background = movies[0].poster ?? "";
        // prefetch large images
        for (let movie of movies) {
          fetch(movie.poster)
        }
      }
    });
    this.subpm = this.movieService.getPopularMovies().subscribe(() => {console.log(this.popularMovies)});
    
  }

  constructor(private movieService:MoviesService) {
  }

  changeBackground(idx:number) {
    let backgroundLink = this.popularMovies[idx].poster;
    this.background = backgroundLink
  }

}
