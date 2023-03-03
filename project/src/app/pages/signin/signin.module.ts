import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { SigninComponent } from "./signin.component";

const routes: Routes = [
    {path: '', component: SigninComponent}
]
@NgModule({
    declarations: [
        SigninComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [

    ]
})
export class SigninModule {}