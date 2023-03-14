import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { MovieDialogComponent } from './component/movie-detail/components/components/movie-dialog/movie-dialog.component';

import { YouTubePlayerModule } from '@angular/youtube-player';

export const PositionKey = new InjectionToken<string>('');

const routes: Routes = [
  {
    path: '',
    component: MovieDetailComponent, 
  },
];

@NgModule({
  declarations: [MovieDetailComponent, MovieDialogComponent],
  imports: [YouTubePlayerModule, CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [{ provide: PositionKey, useValue: 'movies' }],
})
export class MoviesDetialModule {}