import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './core/guards/login-guard.guard';
import { MoviesDetailGuard } from './core/guards/movies-detail.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.AppModule),
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movie/movie.module').then((m) => m.MoviesModule),
  },
  {
    path: 'movies/:id',
    loadChildren: () => import('./pages/movie-detail/movie-detail.module').then((m) => m.MoviesDetialModule),
    canActivate: [MoviesDetailGuard],
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
