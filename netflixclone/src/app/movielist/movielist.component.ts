import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  movies: any[] = [];
  page: number = 1;
  total_pages: number = 0;
  currentUser: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const apiKey = '71ae58e461ffed5e209b514a5f7ce380';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    this.http.get<any>(apiUrl).subscribe(data => {
      this.movies = data.results;
    });

    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString) {
      this.currentUser = JSON.parse(currentUserString);
    }
  }


  loadMore() {
    this.page++;
    this.getMovies();
  }

  getMovies() {
    const apiKey = '71ae58e461ffed5e209b514a5f7ce380';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${this.page}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.movies = [...this.movies, ...data.results];
    });
  }

  goToMovieDetails(movieId: number) {
    this.router.navigate(['/movies', movieId]);
  }

  watchTrailer(movieId: number) {
    const youtubeUrl = `https://www.youtube.com/results?search_query=${this.movies.find(movie => movie.id === movieId).title} official trailer`;
    window.open(youtubeUrl, '_blank');
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = '';
  }
}
