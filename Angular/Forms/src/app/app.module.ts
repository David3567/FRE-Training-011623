import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrossieldvalidationComponent } from './components/crossieldvalidation/crossieldvalidation.component';
import { SetvalidatorComponent } from './components/setvalidator/setvalidator.component';
import { FormarrayComponent } from './components/formarray/formarray.component';
import { DynamicformarrayComponent } from './components/dynamicformarray/dynamicformarray.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    CrossieldvalidationComponent,
    SetvalidatorComponent,
    FormarrayComponent,
    DynamicformarrayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
