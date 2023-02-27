import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
},];


@NgModule({
  declarations: [
    LoginPageComponent,
    LoginComponent],
  imports: [
    CommonModule, 
    SharedModule, 
    RouterModule.forChild(routes)],
  providers: [],
})
export class LoginModule { }
