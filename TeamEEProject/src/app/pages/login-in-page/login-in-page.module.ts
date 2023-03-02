import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginInPageComponent } from './login-in-page.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: LoginInPageComponent }
]

@NgModule({
  declarations: [LoginInPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginInPageComponent,
    RouterModule
  ]
})
export class LoginInPageModule  { }
