import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedetailComponent } from './moviedetail.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieposterComponent } from './movieposter/movieposter.component';
import { MovieactorComponent } from './movieactor/movieactor.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';

const routes: Routes = [
  { path: '', component: MoviedetailComponent },
  { path: 'videos', component: YoutubePlayerComponent }
]

@NgModule({
  declarations: [MoviedetailComponent, MovieposterComponent, MovieactorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MoviedetailComponent,
    RouterModule
  ]
})
export class MoviedetailModule { }
