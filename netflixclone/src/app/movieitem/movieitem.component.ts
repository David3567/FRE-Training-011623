import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

declare var YT: any;

@Component({
  selector: 'app-movieitem',
  templateUrl: './movieitem.component.html',
  styleUrls: ['./movieitem.component.scss']
})
export class MovieitemComponent implements OnInit {
  movie: any;
  player: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id');
    const apiKey = '71ae58e461ffed5e209b514a5f7ce380';
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    this.http.get<any>(apiUrl).subscribe(data => {
      this.movie = data;
    });

    // Load the YouTube iframe API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  }

  watchTrailer(movieId: number) {
    const apiKey = '71ae58e461ffed5e209b514a5f7ce380';
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

    this.http.get<any>(apiUrl).subscribe(data => {
      const youtubeId = data.results[0].key;
      const playerContainer = document.getElementById('player-container');
      this.player = new YT.Player(playerContainer, {
        height: '360',
        width: '640',
        videoId: youtubeId,
        playerVars: {
          autoplay: 1
        }
      });
    });
  }

  closeOverlay() {
    this.player.stopVideo();
  }

  // Callback function called by the YouTube iframe API when it's ready
  onYouTubeIframeAPIReady() {
    console.log('YouTube API is ready!');
  }
}
