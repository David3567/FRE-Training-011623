import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedetailComponent } from './moviedetail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MoviedetailComponent }
]

@NgModule({
  declarations: [MoviedetailComponent],
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
