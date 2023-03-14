import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
