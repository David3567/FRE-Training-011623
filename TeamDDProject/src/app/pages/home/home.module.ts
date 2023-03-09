import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WatchSectionComponent } from './homepage/sections/watch-section/watch-section.component';
import { HeaderComponent } from './homepage/header/header.component';
import { QAndAComponent } from './homepage/q-and-a/q-and-a.component';
import { QAndAItemComponent } from './homepage/q-and-a-item/q-and-a-item.component';
import { DownloadSectionComponent } from './homepage/sections/download-section/download-section.component';
import { KidsSectionComponent } from './homepage/sections/kids-section/kids-section.component';
import { TvSectionComponent } from './homepage/sections/tv-section/tv-section.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HeaderComponent,
    QAndAComponent,
    QAndAItemComponent,
    DownloadSectionComponent,
    KidsSectionComponent,
    TvSectionComponent,
    WatchSectionComponent,
    HomeComponent,
    HomepageComponent,
  ],
  imports: [
    MatFormFieldModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
