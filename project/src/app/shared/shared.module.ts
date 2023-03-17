import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from '@angular/material/expansion';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NavbarComponent } from "./navbar/navbar.component";
import { MatDialogModule } from "@angular/material/dialog";
@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
    ],
    exports: [
      MatExpansionModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatCheckboxModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatDialogModule,

      ReactiveFormsModule,
      FormsModule,
      RouterModule,

      YouTubePlayerModule,
      InfiniteScrollModule,

      NavbarComponent
    ]
})
export class SharedModule {}
