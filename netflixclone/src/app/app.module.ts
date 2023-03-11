import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { CardComponent } from '../components/card/card.component';
import { YoutubeComponent } from '../components/youtube/youtube.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { PlansComponent } from '../components/plans/plans.component';
import { MovielistComponent } from '../components/movielist/movielist.component';
import { PageNotfoundComponent } from '../components/page-notfound/page-notfound.component';
import { HeaderComponent } from '../components/header/header.component';
import { MovieitemComponent } from '../components/movieitem/movieitem.component';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    CardComponent,
    YoutubeComponent,
    NavBarComponent,
    PlansComponent,
    MovielistComponent,
    HeaderComponent,
    MovieitemComponent,
    PageNotfoundComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule {
  
 }
