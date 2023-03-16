import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YoutubePlayerComponent } from './youtube-player.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialogRef } from '@angular/material/dialog';
const routes: Routes = [
  { path: '', component: YoutubePlayerComponent }
]

@NgModule({
  declarations: [YoutubePlayerComponent],
  imports: [
    CommonModule,
    SharedModule,
    YouTubePlayerModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule, 
    YoutubePlayerComponent
  ]
})
export class YoutubePlayerModule { }
