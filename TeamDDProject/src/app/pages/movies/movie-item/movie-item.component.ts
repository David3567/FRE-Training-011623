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
}
