import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesGuard } from "src/app/core/guards/movies.guard";
import { UserRole } from "src/app/services/interfaces/user-auth.interface";
import { SharedModule } from "src/app/shared/shared.module";
import { MovieItemComponent } from "./movie-item/movie-item.component";
import { MovieListComponent } from "./movie-list.component";

const routes: Routes = [
    {path: '', component: MovieListComponent,
        canActivate: [MoviesGuard],
        data: { claimType: [UserRole.ADMIN, UserRole.SUPERUSER, UserRole.USER] }}
]
@NgModule({
    declarations: [
        MovieItemComponent,
        MovieListComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [

    ]
})
export class MovieListModule {}