import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlanBoxComponent } from './plan-box/plan-box.component';
import { RegisterPageTwoComponent } from './register-page-two/register-page-two.component'
import { RegisterPageThreeComponent } from './register-page-three/register-page-three.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';
import { BoxDetailPriceComponent } from './box-detail-price/box-detail-price.component';
import { BoxDetailQualityComponent } from './box-detail-quality/box-detail-quality.component';
import { BoxDetailResolutionComponent } from './box-detail-resolution/box-detail-resolution.component';
import { BoxDetailDownLoadComponent } from './box-detail-down-load/box-detail-down-load.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component'  
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NavBarComponent,
    PlanBoxComponent,
    RegisterPageTwoComponent,
    RegisterPageThreeComponent,
    BoxDetailPriceComponent,
    BoxDetailQualityComponent,
    BoxDetailResolutionComponent,
    BoxDetailDownLoadComponent,
    MovieListComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
