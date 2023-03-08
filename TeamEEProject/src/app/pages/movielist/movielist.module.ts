import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovielistComponent } from './movielist.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { RouterModule, Routes } from '@angular/router';
import { PopularMovieComponent } from './components/popular-movie/popular-movie.component';

const routes: Routes = [
  { path: '', component: MovielistComponent }
]

@NgModule({
  declarations: [MovielistComponent, MovieItemComponent, PopularMovieComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MovielistComponent,
    RouterModule
  ]
})
export class MovielistModule { }
