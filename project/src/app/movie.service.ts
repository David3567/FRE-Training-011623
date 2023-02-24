import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Movie } from './movie.interface';
import { Subject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = 'https://api.themoviedb.org/3/trending/all/week?api_key=1fde6f73ea14a58c868209fb101e2f73';
  movies: Movie[] = [];
  movies$ = new Subject();

  constructor(private http: HttpClient) { }
  
  getMovies() {
    return this.http.get(this.baseUrl).pipe(
      tap((response: any) => {
        this.movies = response.results;
        console.log(response.results);
        this.movies$.next(response.results);
      })
    )
  }
}
