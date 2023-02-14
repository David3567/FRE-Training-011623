import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MovielistPageComponent } from './movielist-page/movielist-page.component';
import { CardComponent } from './card/card.component';
import { MovieitemPageComponent } from './movieitem-page/movieitem-page.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'movie-item', component: MovieitemPageComponent },
  { path: 'movie-list', component: MovielistPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'youtube', component: YoutubeComponent },
  { path: '**', component: PageNotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// npm install swagger-ui-express swagger-jsdoc swagger-ui-dist
