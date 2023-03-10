import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { MovieItemGuard } from "./core/guards/movie-item.guard";

const routes: Routes = [
    { path: 'home', loadChildren: () => import('./pages/homepage/homepage.module').then((m) => m.HomePageModule) },
    { path: 'signin', loadChildren: () => import('./pages/signin/signin.module').then((m) => m.SigninModule) },
    { path: 'register', loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterModule) },
    { path: 'movies', loadChildren: () => import('./pages/movie-list/movie-list.module').then((m) => m.MovieListModule), canLoad: [MovieItemGuard] },
    { path: 'movies/:id', loadChildren: () => import('./pages/movie-item/movie-item.module').then((m) => m.MovieItemModule), canLoad: [MovieItemGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', loadChildren: () => import('./pages/unavailable-page/unavailable-page.module').then((m) => m.UnavilablePageModule) },

]
@NgModule({
    imports: [
        RouterModule.forRoot(routes,{
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}