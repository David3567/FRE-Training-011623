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
  background = 'https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/1e8677dc-8384-41ce-8bf0-99284008466a/US-en-20230206-popsignuptwoweeks-perspective_alpha_website_small.jpg';
  
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
