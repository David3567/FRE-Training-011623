import { NotFoundComponent } from './not-found/not-found.component';
import { TestsubjectComponent } from './testsubject/testsubject.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: 'home', component: TodolistComponent },
  { path: 'test', component: TestsubjectComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
