import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { UnavailablePageComponent } from "./unavailable-page.component";

const routes: Routes = [
    {path: '', component: UnavailablePageComponent}
]
@NgModule({
    declarations: [
        UnavailablePageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        
    ]
})
export class UnavilablePageModule {}