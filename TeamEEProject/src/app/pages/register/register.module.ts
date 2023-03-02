import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPage1Component } from './components/register-page1/register-page1.component';
import { RegisterPage2Component } from './components/register-page2/register-page2.component';
import { RegisterPage3Component } from './components/register-page3/register-page3.component';
import { RegisterHeaderComponent } from './components/register-header/register-header.component';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: RegisterComponent }
]

@NgModule({
  declarations: [RegisterPage1Component, RegisterPage2Component, RegisterPage3Component, RegisterHeaderComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RegisterModule { }
