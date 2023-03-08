import { Component } from '@angular/core';
import { Movie, movieCredit, movieDetail, moviePoster, MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent {
  moviedetail:movieDetail = {
    title: "loading...",
    vote_average: 0,
    vote_count: 0,
    runtime: 0,
    genres: [],
    release_date: "loading...",
    overview: "loading..",
    backdrop_path: "https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/1e8677dc-8384-41ce-8bf0-99284008466a/US-en-20230206-popsignuptwoweeks-perspective_alpha_website_small.jpg"
  }
  movieposter:string[] = [];
  moviecredits!:movieCredit[]

  ngOnInit():void {
    
    this.movieService.getMovieDetailById(668482).subscribe((movie:any) => {
      this.moviedetail = movie;
      let newgeneres = []
      for (let i = 0 ; i < this.moviedetail.genres.length; i++) {
        newgeneres.push(this.moviedetail.genres[i].name)
      }
      this.moviedetail.genres = newgeneres; 
    })

    this.movieService.getMoviePosterById(668482).subscribe((movie:any) => {
      for (let img of movie.backdrops.slice(1,5)) {
        this.movieposter.push(img.file_path);
      };
    })
    this.movieService.moviePoster$.subscribe()
    
    this.movieService.getMovieCreditsById(668482).subscribe((movie:any) => {
      this.moviecredits = movie;
      console.log(this.moviecredits)
    });
    this.movieService.movieCredits$.subscribe();

  }

  constructor(private movieService:MoviesService) {
    
  }
  
}
