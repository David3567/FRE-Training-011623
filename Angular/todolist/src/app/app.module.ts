import { Router } from './../../../services/node_modules/@types/express-serve-static-core/index.d';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestsubjectComponent } from './testsubject/testsubject.component';
import { TodoService } from './services/todo.service';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const BaseUrl = new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoitemComponent,
    TestsubjectComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    TodoService,
    { provide: BaseUrl, useValue: 'https://jsonplaceholder.typicode.com' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
