import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, Subject, tap } from 'rxjs';
import { Movie, ApiData } from '../interface/movie-interface';

// example "https://api.themoviedb.org/3/movie/upcoming?api_key=b58da010083caad9ac63eee587b4999a&language=en-US&page=1"

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  private apiUrl = 'https://api.themoviedb.org/3/discover/movie';
  private miffyApiKey = 'b58da010083caad9ac63eee587b4999a';
  // private queenieApiKey = '024af1dd67c6b784093e06ce104dd99e';
  private imgBaseUrl: string = 'https://image.tmdb.org/t/p/w500';

  MovieList: Movie[] = [];
  MovieList$ = new Subject<Movie[]>();

  constructor(private http: HttpClient) {}

  getMovies(page = 1, language = 'en-US') {
    const url = `${this.apiUrl}${this.miffyApiKey}&language=${language}&page=${page}`;
    // const url = `${this.apiUrl}${this.queenieApiKey}&language=${language}&page=${page}`;
    return this.http.get<ApiData>(url).pipe(
      tap((data) => {
        const movies = data.results.map((each: any) => ({
          id: each.id,
          img: each.backdrop_path,
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
        console.log(movies);
      }),
      catchError((err: any) => {
        console.log(err);
        return err;
      })
    );
  }
}
