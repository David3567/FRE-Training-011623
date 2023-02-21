import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { pluck, Subject, tap } from 'rxjs';

const API_KEY = "b2979efe3455e63e15acabc8179486e1"

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids?: (number)[] | null;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

export interface MoviesServiceResponse {
    page: number;
    results?: (Movie)[] | null;
  }

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies$ = new Subject<Movie[]>();

  getLatestMovies() { 
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    return this.http.get<MoviesServiceResponse>(url).pipe(
      tap((movies: MoviesServiceResponse ) => this.movies$.next(movies.results as Movie[]))
    ).subscribe()
  }
  constructor(private http:HttpClient) {

  }
}
