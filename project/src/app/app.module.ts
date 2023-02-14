import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationOneComponent } from './registration-one/registration-one.component';
import { RegistrationPlanComponent } from './registration-plan/registration-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegistrationComponent,
    RegistrationOneComponent,
    RegistrationPlanComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
