import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { RegisterPageTwoComponent } from './components/register-page-two/register-page-two.component';
import { RegisterPageThreeComponent } from './components/register-page-three/register-page-three.component';
import { BoxDetailDownLoadComponent } from './components/box-detail-down-load/box-detail-down-load.component'
import { BoxDetailPriceComponent } from './components/box-detail-price/box-detail-price.component'
import { BoxDetailQualityComponent } from './components/box-detail-quality/box-detail-quality.component'
import { BoxDetailResolutionComponent } from './components/box-detail-resolution/box-detail-resolution.component'
import { PlanBoxComponent } from './components/plan-box/plan-box.component'


const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      { path: 'step1', component: RegisterPageComponent },
      { path: 'step2', component: RegisterPageTwoComponent },
      { path: 'step3', component: RegisterPageThreeComponent },
      { path: '', redirectTo: 'step1', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterPageComponent,
    RegisterPageTwoComponent,
    RegisterPageThreeComponent,
    BoxDetailDownLoadComponent,
    BoxDetailPriceComponent,
    BoxDetailQualityComponent,
    BoxDetailResolutionComponent,
    PlanBoxComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), ReactiveFormsModule ],
})
export class RegisterModule {}