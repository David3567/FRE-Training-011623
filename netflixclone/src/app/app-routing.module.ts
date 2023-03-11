import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from '../components/homepage/homepage.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { PlansComponent } from '../components/plans/plans.component';
import { MovieitemComponent } from '../components/movieitem/movieitem.component';
import { MovielistComponent } from '../components/movielist/movielist.component';
import { YoutubeComponent } from '../components/youtube/youtube.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../components/header/header.component';
import { PageNotfoundComponent } from '../components/page-notfound/page-notfound.component';
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

