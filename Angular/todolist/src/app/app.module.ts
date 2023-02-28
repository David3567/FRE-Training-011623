import { InjectionToken, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestsubjectComponent } from './testsubject/testsubject.component';
import { TodoService } from './services/todo.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './Ngrx/todos.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './Ngrx/todos.effects';

export const BaseUrl = new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoitemComponent,
    TestsubjectComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      todos: todoReducer,
      // products: productsReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'Todos Demo',
    }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [
    TodoService,
    { provide: BaseUrl, useValue: 'https://jsonplaceholder.typicode.com' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
