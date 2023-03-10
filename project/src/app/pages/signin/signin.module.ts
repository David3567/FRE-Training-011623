import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "src/app/core/guards/login.guard";
import { SharedModule } from "src/app/shared/shared.module";
import { SigninComponent } from "./signin.component";

const routes: Routes = [
    {path: '', component: SigninComponent, canActivate: [LoginGuard]}
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