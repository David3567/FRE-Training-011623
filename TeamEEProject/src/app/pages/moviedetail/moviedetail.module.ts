import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedetailComponent } from './moviedetail.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieposterComponent } from './movieposter/movieposter.component';
import { MovieactorComponent } from './movieactor/movieactor.component';

const routes: Routes = [
  { path: '', component: MoviedetailComponent }
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
