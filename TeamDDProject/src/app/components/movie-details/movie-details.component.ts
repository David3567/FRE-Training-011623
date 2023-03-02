import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/movie-service.service';
import { MovieDetails } from 'src/app/interface/movie-details-interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent {
  movieId!: number;
  movieDetails!: MovieDetails;

  constructor(private movieService: MovieServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
    });
    this.getMovieDetails();
  }

  getMovieDetails() {
    this.movieService.getMovieDetails(this.movieId).subscribe((data: MovieDetails) => {
      this.movieDetails = data;
      console.log(this.movieDetails);
    })
  }
}
