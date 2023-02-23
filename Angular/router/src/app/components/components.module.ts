import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    NotfoundComponent,
    ContactComponent,
    ProductComponent,
    ProductDetailComponent,
  ],
  exports: [
    HomeComponent,
    NotfoundComponent,
    ContactComponent,
    ProductComponent,
    ProductDetailComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class ComponentsModule {}
