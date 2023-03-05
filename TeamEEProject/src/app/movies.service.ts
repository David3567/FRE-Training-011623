import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, pluck, Subject, take, tap } from "rxjs";

const API_KEY = "b2979efe3455e63e15acabc8179486e1";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[] | null;
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

export interface popularMovie {
  name: string;
  poster: string;
}

export interface MoviesServiceResponse {
  page: number;
  results?: Movie[] | null;
}

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  //Variables
  
  movies$ = new BehaviorSubject<Movie[]>([]);
  popularmovies$ = new BehaviorSubject<popularMovie[]>([]);
  //Lifecycle
  constructor(private http: HttpClient) {}
  //Methods
  discoverMovies(options: { [key: string]: string | number | boolean } = {}) {
    options = {
      language: "en-US",
      sort_by: "popularity.desc",
      include_adult: false,
      include_video: false,
      page: 1,
      ...options,
    };
    const queryParams = Object.keys(options)
      .map((key) => `${key}=${options[key]}`)
      .join("&");
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&${queryParams}`;
    return this.http
      .get<MoviesServiceResponse>(url)
      .pipe(
        tap((movies: MoviesServiceResponse) => {
          movies.results = movies.results?.map((movie) => {
            movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            movie.backdrop_path = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
            return movie
          })
          this.movies$.next(movies.results as Movie[])
        }
        )
      )
  }
  getUpcomingMovies(page: number = 1) {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;
    return this.http
      .get<MoviesServiceResponse>(url)
      .pipe(
        tap((movies: MoviesServiceResponse) =>
          this.movies$.next(movies.results as Movie[])
        )
      )
  }
  getLatestMovies(page: number = 1) {
    const url = `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US&page=${page}`;
    return this.http
      .get<MoviesServiceResponse>(url)
      .pipe(
        tap((movies: MoviesServiceResponse) =>
          this.movies$.next(movies.results as Movie[])
        )
      )
  }

  getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    return this.http.get<MoviesServiceResponse>(url).pipe(
      map((movies:MoviesServiceResponse) => movies.results),
      map((movies:any) => movies.slice(0,6).map((movie:any) => ({
        name:movie.title,
        poster: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      }))),
      tap((movies:any) => this.popularmovies$.next(movies)),
    )
  }

}
