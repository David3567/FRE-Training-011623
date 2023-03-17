import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/services/interface/movie-interface';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { MovieDetailsResolver } from 'src/app/services/movie-details.resolver';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})

export class MovieItemComponent {
  @Input() movie!: Movie;
  loading = false;

  constructor(private router: Router) {

  }

  onMovieDetailClick() {
    this.loading = true;
    this.router.navigate(['/movies', this.movie.id]);
  }

  // movie = {
  //   title: 'One Direction: This Is Us',
  //   poster_path: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS07u9ypI9JD-5fWZs5L2hTWym8A5MsbxeC_orFmTiM93ZAIfAK',
  //   release_date: '2013-08-30',
  //   original_language:'en',
  //   vote_average: '8.45',
  //   overview: 'Go behind the scenes during One Directions sell out \"Take Me Home\" tour and experience life on the road.',
  // };
}
