import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movieService/movie-service.service';
import { MovieDetails } from 'src/app/services/interface/movie-details-interface';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  // movieId = 123
  movieId!: number;
  movieDetails!: MovieDetails;

  constructor(
    private movieService: MovieServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   this.movieId = params['id'];
    //   console.log(this.movieId);
    //   this.getMovieDetails(this.movieId);
    // });
    console.log(
      'Activated route data in Component:::',
      this.route.data
    );
    this.route.data.subscribe((data: any) => {
      this.movieDetails = data['movies'];
    });
  }

  // getMovieDetails(movieId: number): void {
  //   this.movieService
  //     .getMovieDetails(movieId)
  //     .subscribe((data: MovieDetails) => {
  //       this.movieDetails = data;
  //       console.log(this.movieDetails);
  //     });
  // }

  goToPlayer(): void {
    this.router.navigate([`movies/:id/videos`]);
  }
}
