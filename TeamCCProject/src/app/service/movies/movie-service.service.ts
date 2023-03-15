import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, Subject, tap } from 'rxjs';
import { Movie, ApiData, MovieDetail, RootObject } from '../interface/movie-interface';
import { Video } from '../interface/video-interface';


// example "https://api.themoviedb.org/3/movie/upcoming?api_key=add383172f3c204e39552dc7a72bc49c&language=en-US&page=1"
// example id "https://api.themoviedb.org/3/movie/646389?api_key=add383172f3c204e39552dc7a72bc49c"
// example https://api.themoviedb.org/3/movie/646389/videos?api_key=ef66efdfcff89510f0937986184b6c6c&language=en-US
const idBaseUrl : string = "https://api.themoviedb.org/3/movie/"
const baseUrl : string = "https://api.themoviedb.org/3/movie/upcoming?"
const DanielApiKey : string = "api_key=add383172f3c204e39552dc7a72bc49c"
const AriaApiKey : string = "api_key=a9c291520b450b9f1145350f124d2d2b"
const HaileyApiKey: string = "api_key=ef66efdfcff89510f0937986184b6c6c"
const imgBaseUrl : string = "https://image.tmdb.org/t/p/w500"

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  MovieList : Movie[] = [];
  MovieList$ = new Subject<Movie[]>();

  MovieDetail: MovieDetail = {
    adult: false,
    img: '',
    budget: 0,
    id: 0,
    language: '',
    title: '',
    description: '',
    popularity: 0,
    date: '',
    revenue: 0,
    runtime: 0,
    status: '',
    tagline: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
    poster_path: '',
  };
  MovieDetail$ = new Subject<MovieDetail>();

  constructor(private http: HttpClient) { }

  getMovies(page?: number, language?: string){
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
            isLoading: each.isLoading,
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
  getMovieByID(id: string){
    return this.http.get<ApiData>(idBaseUrl + id + "?" + AriaApiKey).pipe(
      tap((data: any) =>{
        this.MovieDetail = {
          adult: data.adult,
          img: data.backdrop_path,
          budget: data.budget,
          id: data.id,
          language: data.original_language,
          title: data.title? data.title : data.original_title,
          description: data.overview,
          popularity: data.popularity,
          date: data.release_date,
          revenue: data.revenue,
          runtime: data.runtime,
          status: data.status,
          tagline: data.tagline,
          video: data.video,
          vote_average: data.vote_average,
          vote_count: data.vote_count
        } as MovieDetail
        this.MovieDetail$.next(this.MovieDetail);
        console.log(this.MovieDetail);
      }),
      catchError((err : any) =>{
        console.log(err);
        return err
      })
    )
  }

  getMovieDetails(id: number): Observable<Movie>{
    return this.http.get<Movie>(idBaseUrl + id + "?" + AriaApiKey).pipe(
      tap((data) => {
        console.log("Movie details retrieved successfully", data);
      })
    );
  }



  MovieVideos: Video[] = [];
  
  MovieVideos$ = new Subject<Video[]>();


// example https://api.themoviedb.org/3/movie/646389/videos?api_key=ef66efdfcff89510f0937986184b6c6c&language=en-US

  getVideoByID(id: number){
    console.log("IN GETVIDEOBYID")
    return this.http.get<ApiData>(idBaseUrl + id + "/videos?" + HaileyApiKey + "&language=" + "en-US").pipe(
      tap((data: any) =>{
        this.MovieVideos = data.results.map((each:any) => {
          return {
            id: id,
            key: each.key,
          }
        });
        this.MovieVideos$.next(this.MovieVideos);

      }),
      catchError((err : any) =>{
        console.log(err);
        return err
      })
    )
  }


}
