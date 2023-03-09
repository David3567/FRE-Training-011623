import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YoutubePlayerComponent } from './youtube-player.component'
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: YoutubePlayerComponent }
]

@NgModule({
  declarations: [YoutubePlayerComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule, 
    YoutubePlayerComponent
  ]
})
export class YoutubePlayerModule { }
