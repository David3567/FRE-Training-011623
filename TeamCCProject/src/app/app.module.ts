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
import { BoxDetailPriceComponent } from './box-detail-price/box-detail-price.component'  

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
    BoxDetailPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
