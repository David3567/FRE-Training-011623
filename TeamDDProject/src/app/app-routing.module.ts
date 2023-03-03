import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: `movies/:this.movieDetails.movieId/videos`, component: YoutubePlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
