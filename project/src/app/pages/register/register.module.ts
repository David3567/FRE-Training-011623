import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { RegistrationOneComponent } from "./pages/registration-one/registration-one.component";
import { RegistrationPlanComponent } from "./pages/registration-plan/registration-plan.component";
import { RegistrationTwoComponent } from "./pages/registration-two/registration-two.component";
import { RegisterComponent } from "./register.component";

const routes: Routes = [
    {path: '', component: RegisterComponent,
    children: [
        { path: '1', component: RegistrationOneComponent },
        { path: '2', component: RegistrationTwoComponent },
        { path: '3', component: RegistrationPlanComponent },
        { path: '', redirectTo: '1', pathMatch: 'full'}
    ]}
]
@NgModule({
    declarations: [
        RegistrationOneComponent,
        RegistrationTwoComponent,
        RegistrationPlanComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [

    ]
})
export class RegisterModule {}