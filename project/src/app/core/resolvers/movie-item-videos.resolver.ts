import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Injectable({
  providedIn: 'root'
})
export class MovieItemVideosResolver implements Resolve<any> {
  constructor(private tmdbService: TmdbService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.tmdbService.getMovieInfo(+route.params['id'], 'videos')
  }
}
