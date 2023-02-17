import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RegisterPage1Component } from './register-page1/register-page1.component';
import { RegisterPage2Component } from './register-page2/register-page2.component';
import { RegisterPage3Component } from './register-page3/register-page3.component';
import { RegisterHeaderComponent } from './register-header/register-header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterHeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterPage1Component,
    RegisterPage2Component,
    RegisterPage3Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
