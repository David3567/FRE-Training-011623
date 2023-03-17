import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieDialogComponent } from './youtube-player.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [
  { path: '', component: MovieDialogComponent }
]

@NgModule({
  declarations: [MovieDialogComponent],
  imports: [
    MovieDialogComponent,
    MatIconModule,
    YouTubePlayerModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule, 
    MovieDialogComponent
  ]
})
export class YoutubePlayerModule { }