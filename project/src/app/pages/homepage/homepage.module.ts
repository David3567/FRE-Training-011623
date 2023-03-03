import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { HomepageBackgroundComponent } from "./homepage-background/homepage-background.component";
import { HomepageComponent } from "./homepage.component";


const routes: Routes = [
    {path: '', component: HomepageComponent}
]
@NgModule({
    declarations: [
        HomepageComponent,
        HomepageBackgroundComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [

    ]
})
export class HomePageModule {}