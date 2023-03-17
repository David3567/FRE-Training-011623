import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable} from 'rxjs';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Injectable({
  providedIn: 'root'
})
export class MovieCreditResolver implements Resolve<any> {
  constructor(private tmdbService: TmdbService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.tmdbService.getMovieInfo(+route.params['id'], 'credits').pipe(
      map((credits) => {
        return credits.cast?.slice(0, 10);
      })
    )
  }
}
