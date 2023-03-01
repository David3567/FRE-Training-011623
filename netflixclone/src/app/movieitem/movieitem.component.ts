import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movieitem',
  templateUrl: './movieitem.component.html',
  styleUrls: ['./movieitem.component.scss']
})
export class MovieitemComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id');
    const apiKey = '71ae58e461ffed5e209b514a5f7ce380';
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    this.http.get<any>(apiUrl).subscribe(data => {
      this.movie = data;
    });
  }

  watchTrailer(movieId: number) {
    const apiKey = '71ae58e461ffed5e209b514a5f7ce380';
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

    this.http.get<any>(apiUrl).subscribe(data => {
      const youtubeId = data.results[0].key;
      window.location.href = `https://www.youtube.com/watch?v=${youtubeId}`;
    });
  }
}
