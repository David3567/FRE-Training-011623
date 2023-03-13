import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlansComponent } from './plans/plans.component';
import { CardComponent } from './card/card.component';
import { MovieitemComponent } from './movieitem/movieitem.component';
import { MovielistComponent } from './movielist/movielist.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'movies/:id', component: MovieitemComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'plans', component: PlansComponent, },
  { path: 'youtube', component: YoutubeComponent },
  { path: 'movielist', component: MovielistComponent, canActivate:[AuthGuard] },
  { path: 'header', component: HeaderComponent, canActivate:[AuthGuard]},
  { path: '**', component: PageNotfoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

