import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [HomepageComponent, SearchBarComponent],
  imports: [
    CommonModule
  ],
  exports: [HomepageComponent,SearchBarComponent]
})
export class HomepageModule { }
