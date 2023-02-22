import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, Subject, tap } from 'rxjs';
import { Movie, ApiData } from './movie-interface';

// example "https://api.themoviedb.org/3/movie/upcoming?api_key=add383172f3c204e39552dc7a72bc49c&language=en-US&page=1"
const baseUrl : string = "https://api.themoviedb.org/3/movie/upcoming?"
const DanielApiKey : string = "api_key=add383172f3c204e39552dc7a72bc49c"
const AriaApiKey : string = "api_key=a9c291520b450b9f1145350f124d2d2b"
const imgBaseUrl : string = "https://image.tmdb.org/t/p/w500"

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  MovieList : Movie[] = [];
  MovieList$ = new Subject<Movie[]>();

  constructor(private http: HttpClient) { }

  getBooks(page?: number, language?: string){
    page = page? page : 1;
    language = language? language : "en-US";
    return this.http.get<ApiData>(baseUrl + AriaApiKey  + "&language=" + language + "&page=" + page).pipe(
      tap((data) =>{
        this.MovieList = data.results.map((each:any)=>{
          return {
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
          }
        })
        this.MovieList$.next(this.MovieList);
        console.log(this.MovieList);
      }),
      catchError((err : any) =>{
        console.log(err);
        return err
      })
    )
  }

}
