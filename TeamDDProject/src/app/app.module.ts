import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/homepage/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterComponent } from './components/register-page/register/register.component';
import { RegisterTwoComponent } from './components/register-page/register-two/register-two.component';
import { RegisterThreeComponent } from './components/register-page/register-three/register-three.component';
import { MatInputModule } from '@angular/material/input';
import { TvSectionComponent } from './components/homepage/sections/tv-section/tv-section.component';
import { WatchSectionComponent } from './components/homepage/sections/watch-section/watch-section.component';
import { KidsSectionComponent } from './components/homepage/sections/kids-section/kids-section.component';
import { DownloadSectionComponent } from './components/homepage/sections/download-section/download-section.component';
import { QAndAComponent } from './components/homepage/q-and-a/q-and-a.component';
import { QAndAItemComponent } from './components/homepage/q-and-a-item/q-and-a-item.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MatCardModule } from '@angular/material/card';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    HomepageComponent,
    LoginPageComponent,
    RegisterComponent,
    RegisterThreeComponent,
    RegisterTwoComponent,
    TvSectionComponent,
    WatchSectionComponent,
    KidsSectionComponent,
    DownloadSectionComponent,
    QAndAComponent,
    QAndAItemComponent,
    MovieItemComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
