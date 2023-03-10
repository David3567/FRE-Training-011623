import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { MovieImgBaseUrl, TmdbBaseUrl } from 'src/app/core/core.module';
import { Credit } from '../interfaces/credit.interface';
import { DiscoverMovie } from '../interfaces/discoverMovie.interface';
import { Movie } from '../interfaces/movie.interface';
import { SearchMovieDto } from '../interfaces/searchMovieDto.interface';
import { SearchMovieReturn } from '../interfaces/searchMovieReturn.interface';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private readonly discoverMoviePath = 'discover/movie?';
  private readonly searchMoviePath = 'search/movie?';
  private readonly moviePath = 'movie';

  private movieList: Movie[] = [];
  private movieList$ = new BehaviorSubject(this.movieList);

  private recommendList: Movie[] = [];
  private recommendList$ = new BehaviorSubject(this.recommendList);

  private currentPage = 1;
  private baseDiscoverMovie: DiscoverMovie = {
    api_key: '',
    page: 1,
    language: 'en-US',
    sort_by: 'popularity.desc',
    include_adult: false,
    include_video: false,
    with_watch_monetization_types: 'flatrate',
  };
  private baseSearchMovie: SearchMovieDto = {
    api_key: '',
    query: '',
    language: 'en-US',
    page: 1,
  };
  
  set setMyApiKey(api_key: string) {
    this.baseDiscoverMovie.api_key = api_key;
    this.baseSearchMovie.api_key = api_key;
  }
  constructor(private readonly http: HttpClient, @Inject(TmdbBaseUrl) private tmdbBaseUrl: string, @Inject(MovieImgBaseUrl) private movieImgBaseUrl: string) { }

  getDiscoverMovie(page: number = 1, search: DiscoverMovie = {}) {
    const discoverMovie = {...this.baseDiscoverMovie, ...search, page: page};
    let url = this.tmdbBaseUrl + '/' + this.discoverMoviePath;
    Object.entries(discoverMovie).forEach(([key, value]) => {
      url += `&${key}=${value}`;
    })
    return this.http.get<SearchMovieReturn>(url).pipe(
      tap(data => {
        if (!this.movieList.length) {
          this.movieList = [...(data.results as Movie[])];
          this.movieList$.next(this.movieList);
          this.recommendList = [...this.movieList.slice(0, 7)];
          this.recommendList$.next(this.recommendList);
        }
      })
    );
  }

  searchMovie(name: string) {
    const search = {...this.baseSearchMovie, name};
    let url = this.tmdbBaseUrl + '/' + this.searchMoviePath;
    Object.entries(search).forEach(([key, value]) => {
      url += `&${key}=${value}`;
    })
    return this.http.get<SearchMovieReturn>(url).pipe(
      tap(data => {
        if (!this.movieList.length) {
          this.movieList = [...(data.results as Movie[])];
        } else {
          this.movieList = [...this.movieList, ...(data.results as Movie[])];
        }
        this.movieList$.next(this.movieList);
      })
    );
  }

  handleScroll() {
    this.getDiscoverMovie(++this.currentPage)
  }
  getMovieImagePath(path: string, quality: string): string {
    return [this.movieImgBaseUrl, quality, path].join('/');
  }
  getMovieInfo(id: number, item: string =''): Observable<any> {
    let url = ''
    if (this.baseDiscoverMovie.api_key) {
      if (!item) {
        url = [this.tmdbBaseUrl, this.moviePath, id].join('/') + '?api_key=' + this.baseDiscoverMovie.api_key;
      } else {
        url = [this.tmdbBaseUrl, this.moviePath, id, item].join('/') + '?api_key=' + this.baseDiscoverMovie.api_key;
      }
    } 
    return this.http.get(url);
  }
}
