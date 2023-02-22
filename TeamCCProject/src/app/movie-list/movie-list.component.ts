import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie-interface';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  rows: Movie[][] = [];

  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    let numRows = 6;
    let numCols = 5;
    let currentIndex = 0;

    for (let i = 0; i < numRows; i++) {
      let row: Movie[] = [];
      for (let j = 0; j < numCols; j++) {
        if (currentIndex < this.movieList.length) {
          row.push(this.movieList[currentIndex]);
          currentIndex++;
        } else {
          break;
        }
      }
      this.rows.push(row);

      this.movieService.getBooks().subscribe();
      this.movieService.MovieList$.subscribe((data) => {
        this.movieList = data;
      })
    }
  }
}
