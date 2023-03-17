import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject, map, pluck, Subject, take, tap, catchError, of } from "rxjs";


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

export interface movieDetail {
  title: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  genres: any[];
  release_date: string;
  overview: string
  backdrop_path:string;
}

export interface MoviesServiceResponse {
  page: number;
  results?: Movie[] | null;
}

export interface Video{
  iso_639_1: string; //language
  iso_3166_1: string; // country
  name: string;
  key: string; //video key 
  site: string; //yt
  size: number; // 1080
  type: string; //trailer
  official: boolean, 
  published_at: string; // publish date
  id: number;
}
export interface moviePoster{
  backdrops:[];
}

export interface movieCredit {
  name: string
  profile_path: string
}

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  //Variables
  
  movies$ = new BehaviorSubject<Movie[]>([]);
  movie:Movie[] = []
  popularmovies$ = new BehaviorSubject<popularMovie[]>([]);
  movieDetail$ = new BehaviorSubject<movieDetail[]>([]);
  moviePoster$ = new BehaviorSubject<any[]>([]);
  movieCredits$ = new BehaviorSubject<any[]>([]);
  page$ = new BehaviorSubject<number>(1);
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
          this.movie = [...this.movie, ...movies.results as Movie[]]
          this.movies$.next(this.movie)
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
  
  VideoList: Video[] = [];
  VideoList$ = new Subject<Video[]>();

  getVideosById(id: number) {  
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
    return this.http.get<MoviesServiceResponse>(url)
    .pipe(
      tap((data) => {
        const videos = data.results?.map((each: any) => ({
          iso_639_1: each.iso_639_1,
          iso_3166_1: each.iso_3166_1,
          name: each.name,
          key: each.key,
          site: each.site,
          size: each.size,
          type: each.type,
          official: each.official,
          published_at: each.published_at,
          id: each.id,
          }));
          
          this.VideoList = videos || [];
          this.VideoList$.next(videos || []);
          console.log(videos);
          console.log('new video here')
        }),
        catchError((err: any) => {
          console.log(err);
          return err;
        })
      );
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

  getMovieDetailById(id:number) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    return this.http.get<any>(url).pipe(
      map((movie:any) => ({
        title: movie.title,
        vote_average:movie.vote_average,
        vote_count: movie.vote_count,
        runtime:movie.runtime,
        genres:movie.genres,
        release_date:movie.release_date,
        overview: movie.overview,
        backdrop_path: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      })),
      tap((movie:any) => {
        this.movieDetail$.next(movie);
      })
    )
  }

  getMoviePosterById(id:number) {
    const url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`;
    return this.http.get<any>(url).pipe(
      map((movie:any) => ({
        backdrops:movie.backdrops,
      })),
      tap((movie:any) => {
        for (let i = 0; i < movie.backdrops.length; i++) {
          movie.backdrops[i] = {
            file_path: `https://image.tmdb.org/t/p/original${movie.backdrops[i].file_path}`
          }
        }
      }),
      tap((movie:any) => {
        this.moviePoster$.next(movie)
      })
    )
  }

  getMovieCreditsById(id:number) {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    return this.http.get<any>(url).pipe(
      map((movie:any) => movie.cast),
      map((casts:any) => casts.slice(0,8).map((cast:any) =>
        (
          {
          name: cast.name,
          profile_path:`https://image.tmdb.org/t/p/original${cast.profile_path}`
        })
      )),
      tap((movie:any) => {
        this.movieCredits$.next(movie);
      })
    )
  }

}
