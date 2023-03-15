import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { MovieDialogComponent } from './component/movie-detail/components/components/movie-dialog/movie-dialog.component';

import { YouTubePlayerModule } from '@angular/youtube-player';


import { MatDialogModule, MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

export const PositionKey = new InjectionToken<string>('');

const routes: Routes = [
  {
    path: '',
    component: MovieDetailComponent, 
  },
];

@NgModule({
  declarations: [MovieDetailComponent, MovieDialogComponent],
  imports: [MatDialogModule, YouTubePlayerModule, CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [ {provide: MatDialog}, 
    { provide: PositionKey, useValue: 'movies' }, 
  { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { disableClose: true } }],
})
export class MoviesDetialModule {}