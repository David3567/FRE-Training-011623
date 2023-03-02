import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)},
  {path: 'movielist', loadChildren: () => import('./pages/movielist/movielist.module').then(m => m.MovielistModule)},
  {path: 'homepage', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)},
  {path: 'login', loadChildren: () => import('./pages/login-in-page/login-in-page.module').then(m => m.LoginInPageModule)},
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: '**', redirectTo: 'homepage', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
