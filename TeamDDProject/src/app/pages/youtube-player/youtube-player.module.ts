import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YoutubePlayerComponent } from './youtube-player.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [
  { path: '', component: YoutubePlayerComponent }
]

@NgModule({
  declarations: [YoutubePlayerComponent],
  imports: [
    YoutubePlayerComponent,
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
    YoutubePlayerComponent
  ]
})
export class YoutubePlayerModule { }