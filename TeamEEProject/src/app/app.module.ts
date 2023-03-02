
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginInPageComponent } from './login-in-page/login-in-page.component';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { MoviesService, Movie } from './movies.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RegisterComponent } from './register/register.component';
import { RegisterPage1Component } from './register-page1/register-page1.component';
import { RegisterPage2Component } from './register-page2/register-page2.component';
import { RegisterPage3Component } from './register-page3/register-page3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterHeaderComponent } from './register-header/register-header.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MovieItemComponent } from './movie-item/movie-item.component';

const API_BASE_URL = 'http://localhost:4231/';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    LoginInPageComponent,
    HomepageComponent,
    RegisterComponent,
    RegisterPage1Component,
    RegisterPage2Component,
    RegisterPage3Component,
    RegisterHeaderComponent,
    MovielistComponent,
    MovieItemComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient, MoviesService, {
    provide: 'API_BASE_URL',
    useValue: API_BASE_URL
  }],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
