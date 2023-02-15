import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import { RegistrationOneComponent } from './registration-one/registration-one.component';
import { RegistrationPlanComponent } from './registration-plan/registration-plan.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageBackgroundComponent } from './homepage-background/homepage-background.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegistrationOneComponent,
    RegistrationPlanComponent,
    NavbarComponent,
    HomepageComponent,
    HomepageBackgroundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
