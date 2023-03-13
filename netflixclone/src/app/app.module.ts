import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './card/card.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlansComponent } from './plans/plans.component';
import { MovielistComponent } from './movielist/movielist.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { HeaderComponent } from './header/header.component';
import { MovieitemComponent } from './movieitem/movieitem.component';




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
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule {
  
 }
