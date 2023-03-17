import { InjectionToken, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { MovieDetailsComponent } from './movie-details.component';
import { MovieDialogComponent } from '../youtube-player/youtube-player.component';

import { YouTubePlayerModule } from '@angular/youtube-player';


import { MatDialogModule, MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

export const PositionKey = new InjectionToken<string>('');

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsComponent, 
  },
];

@NgModule({
  declarations: [MovieDetailsComponent, MovieDialogComponent],
  imports: [MatIconModule, MatDialogModule, YouTubePlayerModule, CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [ {provide: MatDialog}, 
    { provide: PositionKey, useValue: 'movies' }, 
  { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { disableClose: true } }],
})
export class MoviesDetialModule {}