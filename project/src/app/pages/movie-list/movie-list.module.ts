import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { MovieItemComponent } from "./movie-item/movie-item.component";
import { MovieListComponent } from "./movie-list.component";

const routes: Routes = [
    {path: '', component: MovieListComponent}
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