import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.AppModule),
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
