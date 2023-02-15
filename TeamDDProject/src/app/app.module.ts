import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/homepage/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatInputModule } from '@angular/material/input';
import { TvSectionComponent } from './components/homepage/sections/tv-section/tv-section.component';
import { WatchSectionComponent } from './components/homepage/sections/watch-section/watch-section.component';
import { KidsSectionComponent } from './components/homepage/sections/kids-section/kids-section.component';
import { DownloadSectionComponent } from './components/homepage/sections/download-section/download-section.component';
import { QAndAComponent } from './components/homepage/q-and-a/q-and-a.component';
import { QAndAItemComponent } from './components/homepage/q-and-a-item/q-and-a-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    HomepageComponent,
    TvSectionComponent,
    WatchSectionComponent,
    KidsSectionComponent,
    DownloadSectionComponent,
    QAndAComponent,
    QAndAItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
