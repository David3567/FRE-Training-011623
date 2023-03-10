import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription, take } from 'rxjs';
import { DiscoverMovie } from 'src/app/services/interfaces/discoverMovie.interface';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { Movie } from '../../movie.interface';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  recommendMovies: Movie[] = [];
  showSearchForm = true;
  recommendMovieImg: string = '';
  backupImg = 'src/assets/video/VGA-no-signal-image.jpeg';
  finished = false;
  private subscriptions = new Subscription();

  private baseSearchMovie: DiscoverMovie = {
    page: 1,
    year: 2023,
  };

  constructor(
    private readonly router: Router,
    private readonly tmdbService: TmdbService) {}

  ngOnInit() {
    this.movies$ = this.tmdbService.getDiscoverMovie() as Observable<Movie[]>;
    const movies = this.getCurValFromObs(this.movies$);
    this.recommendMovies = [...movies];
    if (this.recommendMovies.length && this.recommendMovies[0].id) {
      this.hoverRecommendMovies(this.recommendMovies[0].id);
    }
  }

  private getCurValFromObs(obs: Observable<any>): any {
    let value: any;
    obs.pipe(take(1)).subscribe((val) => {
      value = val;
    });
    return value;
  }

  hoverRecommendMovies(id: number) {
    const movie = this.recommendMovies.find((item: Movie | any) => +item.id === +id);
    this.recommendMovieImg =
      movie && movie.backdrop_path
        ? this.tmdbService.getMovieImagePath(movie.backdrop_path, 'w1280')
        : this.backupImg;
  }

  onScroll() {
    this.tmdbService.handleScroll();
  }

  navigateMovie(id: number) {
    this.router.navigate(['/movies', id]);
  }

  trackByFn(i: number, item: Movie) {
    return item.id;
  }

}