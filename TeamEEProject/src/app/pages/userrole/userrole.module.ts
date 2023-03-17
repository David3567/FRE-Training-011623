import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserroleComponent } from './userrole.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UserroleComponent }
]

@NgModule({
  declarations: [
    UserroleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserroleModule { }
