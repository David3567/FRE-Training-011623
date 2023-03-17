import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { MoviesDetailGuard } from './guards/movies-detail.guard';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MovieDetailsResolver } from './services/movie-details.resolver';
// import { MovieListComponent } from './pages/movie-list/movie-list.component';
// import { YoutubePlayerComponent } from './pages/youtube-player/youtube-player.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login-page.module').then((m) => m.AppModule),
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
    resolve: { movies: MovieDetailsResolver },
    canActivate: [MoviesDetailGuard],
  },
  // {
  //   path: `movies/:this.movieDetails.movieId/videos`,
  //   component: YoutubePlayerComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
