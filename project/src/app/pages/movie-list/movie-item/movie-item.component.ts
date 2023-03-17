import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../../movie.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  imgUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"
  isLoading: boolean = false;
  @Input() movie: any;

  constructor(private router: Router) {}
  ngOnInit() {
    if (this.movie.poster_path) {
      this.movie.poster_path = this.imgUrl + this.movie.poster_path;
    } else {
      this.movie.poster_path = 'http://www.movienewz.com/img/films/poster-holder.jpg';
    }
  }

  goToDetailPage() {
    this.isLoading = true;
    this.router.navigate(['/movies', this.movie.id])
  }
}
