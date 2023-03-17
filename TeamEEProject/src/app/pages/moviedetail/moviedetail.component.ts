import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Movie, movieCredit, movieDetail, moviePoster, MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent {

  moviedetail!:any;
  movieposter:string[] = [];
  moviecredits!:movieCredit[];
  movieSb$!:any;
  nullImg: string = 'https://image.tmdb.org/t/p/originalnull';
  background = 'https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/1e8677dc-8384-41ce-8bf0-99284008466a/US-en-20230206-popsignuptwoweeks-perspective_alpha_website_small.jpg';

  ngOnInit():void {
    
    this.movieSb$ = this.activateRoute.data.subscribe( data => {
      this.moviedetail = data['movieD'][0]
      if (this.moviedetail.backdrop_path === this.nullImg) { 
        this.moviedetail.backdrop_path = this.background;
      }
      if (this.moviedetail.release_date !== undefined) { 
        this.moviedetail.release_date = this.moviedetail.release_date.split("-")[0]
      }
      let newgeneres = []
      for (let i = 0 ; i < this.moviedetail.genres.length; i++) {
        newgeneres.push(this.moviedetail.genres[i].name)
      }
      this.moviedetail.genres = newgeneres;
      for (let img of data['movieD'][1].backdrops.slice(1,5)) {
        if (img.file_path != this.nullImg) {
          this.movieposter.push(img.file_path);
        }
      }; 
      this.moviecredits = data['movieD'][2].filter((actor:movieCredit) => actor.profile_path !== this.nullImg );
    });
  

    // this.movieService.getMovieDetailById(668482).subscribe((movie:any) => {
    //   this.moviedetail = movie;
    //   let newgeneres = []
    //   for (let i = 0 ; i < this.moviedetail.genres.length; i++) {
    //     newgeneres.push(this.moviedetail.genres[i].name)
    //   }
    //   this.moviedetail.genres = newgeneres; 
    // })

    // this.movieService.getMoviePosterById(668482).subscribe((movie:any) => {
    //   for (let img of movie.backdrops.slice(1,5)) {
    //     this.movieposter.push(img.file_path);
    //   };
    // })
    
    // this.movieService.getMovieCreditsById(668482).subscribe((movie:any) => {
    //   this.moviecredits = movie;
    //   console.log(this.moviecredits)
    // });

  }

  constructor(private activateRoute: ActivatedRoute, private router: Router) {
  }
  playTrailer(){
    this.router.navigate([`movies/:id/videos`])
  }
  
}
