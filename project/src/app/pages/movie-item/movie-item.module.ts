import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieItemGuard } from "src/app/core/guards/movie-item.guard";
import { UserRole } from "src/app/services/interfaces/user-auth.interface";
import { SharedModule } from "src/app/shared/shared.module";
import { MovieItemComponent } from "./movie-item.component";
import { YoutubeComponent } from "./youtube/youtube.component";


const routes: Routes = [
    {
      path: '',
      component: MovieItemComponent,
      canActivate: [MovieItemGuard],
      data: {
        claimType: [UserRole.ADMIN, UserRole.SUPERUSER],
      },   }
]
@NgModule({
    declarations: [
        YoutubeComponent,
        MovieItemComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [

    ]
})
export class MovieItemModule {}
