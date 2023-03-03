import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject, tap } from 'rxjs';
import { Movie, ApiData, Video } from './interface/movie-interface';
import { MovieDetails } from './interface/movie-details-interface';

// example "https://api.themoviedb.org/3/movie/upcoming?api_key=b58da010083caad9ac63eee587b4999a&language=en-US&page=1"

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/';
  private miffyApiKey = 'b58da010083caad9ac63eee587b4999a';
  // private queenieApiKey = '024af1dd67c6b784093e06ce104dd99e';
  private imgBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  private idBaseUrl : string = "https://api.themoviedb.org/3/movie/"

  MovieList: Movie[] = [];
  MovieList$ = new Subject<Movie[]>();
  movieDetails!: MovieDetails;

  VideoList: Video[] = [];
  VideoList$ = new Subject<Video[]>();

  constructor(private http: HttpClient) {}

  getMovies(page = 1, language = 'en-US') {
    const url = `${this.apiUrl}upcoming?api_key=${this.miffyApiKey}&language=${language}&page=${page}`;
    // const url = `${this.apiUrl}${this.queenieApiKey}&language=${language}&page=${page}`;
    
    return this.http.get<ApiData>(url).pipe(
      tap((data) => {
        const movies = data.results.map((each: any) => ({
          id: each.id,
          img: each.poster_path,
          title: each.title,
          rate: each.vote_average,
          date: each.release_date,
          description: each.overview,
          language: each.original_language,
          popularity: each.popularity,
          video: each.video,
          adult: each.adult,
        }));
        this.MovieList = movies;
        this.MovieList$.next(movies);
        // console.log(movies);
      }),
      catchError((err: any) => {
        console.log(err);
        return err;
      })
    );
  };

  // https://api.themoviedb.org/3/movie/315162/videos?api_key=b58da010083caad9ac63eee587b4999a&language=en-US
  getVideosById(id: number) {
    const getVideoUrl = `${this.idBaseUrl}${id}/videos?api_key=${this.miffyApiKey}&language=en-US`;
    return this.http.get<ApiData>(getVideoUrl).pipe(
      tap((data) => {
        const videos = data.results.map((each: any) => ({
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
        this.VideoList = videos;
        this.VideoList$.next(videos);
        console.log(videos);
        console.log('here')
      }),
      catchError((err: any) => {
        console.log(err);
        return err;
      })
    );
  }

  getMovieDetails(movieId: number): Observable<MovieDetails>{
    const url = `${this.apiUrl}${movieId}?api_key=${this.miffyApiKey}&language=en-US`;
    return this.http.get<MovieDetails>(url);
  }
}

// `https://api.themoviedb.org/3/movie/${Movie.id}$/videos`