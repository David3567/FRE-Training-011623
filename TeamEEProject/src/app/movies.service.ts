import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, pluck, Subject, tap, catchError } from "rxjs";

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


@Injectable({
  providedIn: "root",
})
export class MoviesService {
  //Variables
  movies$ = new BehaviorSubject<Movie[]>([]);
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

}
