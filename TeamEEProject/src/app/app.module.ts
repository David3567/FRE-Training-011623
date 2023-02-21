
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginInPageComponent } from './login-in-page/login-in-page.component';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
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

  ],
  declarations: [  
    LoginInPageComponent,
    AppComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }