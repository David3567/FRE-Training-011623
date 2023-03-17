import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterOneComponent } from './register-one/register-one.component';
import { RegisterTwoComponent } from './register-two/register-two.component';
import { RegisterThreeComponent } from './register-three/register-three.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginGuardGuard } from 'src/app/guards/login-guard.guard';
import { BoxDetailDownLoadComponent } from './components/box-detail-down-load/box-detail-down-load.component';
import { BoxDetailPriceComponent } from './components/box-detail-price/box-detail-price.component';
import { BoxDetailQualityComponent } from './components/box-detail-quality/box-detail-quality.component';
import { BoxDetailResolutionComponent } from './components/box-detail-resolution/box-detail-resolution.component';
import { PlanBoxComponent } from './components/plan-box/plan-box.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      {
        path: '1',
        component: RegisterOneComponent,
        canActivate: [LoginGuardGuard],
      },
      {
        path: '2',
        component: RegisterTwoComponent,
        canActivate: [LoginGuardGuard],
      },
      { path: '3', component: RegisterThreeComponent },
      { path: '', redirectTo: '1', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterOneComponent,
    RegisterTwoComponent,
    RegisterThreeComponent,
    FooterComponent,
    HeaderComponent,
    BoxDetailDownLoadComponent,
    BoxDetailPriceComponent,
    BoxDetailQualityComponent,
    BoxDetailResolutionComponent,
    PlanBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
})
export class RegisterModule {}
