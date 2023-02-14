import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MovielistPageComponent } from './movielist-page/movielist-page.component';
import { CardComponent } from './card/card.component';
import { MovieitemPageComponent } from './movieitem-page/movieitem-page.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    MovielistPageComponent,
    CardComponent,
    MovieitemPageComponent,
    YoutubeComponent,
    NavBarComponent,
    PageNotfoundComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule {
  
 }
