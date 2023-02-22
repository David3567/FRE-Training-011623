
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
