
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginInPageComponent } from './pages/login-in-page/login-in-page.component';
import { AppComponent } from './app.component';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { MoviesService, Movie } from './movies.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterHeaderComponent } from './pages/register/components/register-header/register-header.component';
import { MovieItemComponent } from './pages/movielist/components/movie-item/movie-item.component';
import { RegisterModule } from './pages/register/register.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { YoutubePlayerComponent } from './pages/moviedetail/youtube-player/youtube-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MoviedetailModule } from './pages/moviedetail/moviedetail.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

const API_BASE_URL = 'http://localhost:4231/';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MoviedetailModule,
  ],
  providers: [HttpClient, MoviesService, {
    provide: 'API_BASE_URL',
    useValue: API_BASE_URL
  }, { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
