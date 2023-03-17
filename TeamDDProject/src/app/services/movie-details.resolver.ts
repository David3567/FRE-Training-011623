import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { map, Observable, of, delay } from 'rxjs';
import { MovieServiceService } from './movieService/movie-service.service'

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsResolver implements Resolve<boolean> {
  constructor(private router: Router, private movieService: MovieServiceService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    console.log('MovieDetailsResolver  called');
    const id = route.paramMap.get('id');
    if (!id) return of(null);
    return this.movieService.getMovieDetails(id).pipe(delay(2000));
  }

}