import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, EMPTY, Observable, zip } from 'rxjs';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class MoviedetailResolver implements Resolve<any> {
  constructor(private movieService:MoviesService, private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    const movieDetail$ = this.movieService.getMovieDetailById(route.params['id']).pipe(
      delay(1000),
    catchError(() => {
      this.router.navigate([""]);
      return EMPTY;
    }));

    const moviePosters$ = this.movieService.getMoviePosterById(route.params['id']).pipe(delay(1500),

    catchError(() => {
      this.router.navigate([""]);
      return EMPTY;
    }));
    
    const movieCredits$ = this.movieService.getMovieCreditsById(route.params['id']).pipe(delay(2000),
  
    catchError(() => {
      this.router.navigate([""]);
      return EMPTY;
    }));

    return zip(movieDetail$, moviePosters$, movieCredits$)

  }
}