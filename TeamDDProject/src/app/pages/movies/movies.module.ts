import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MoviesComponent } from './movies.component';

export const PositionKey = new InjectionToken<string>('');

const routes: Routes = [{ path: '', component: MovieListComponent }];

@NgModule({
  declarations: [MoviesComponent, MovieListComponent, MovieItemComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [{ provide: PositionKey, useValue: 'movies' }],
})
export class MoviesModule {}
