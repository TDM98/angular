import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header.component';
import { DopplerComponent } from './doppler.component';
import { SieuAm2Component } from './sieu-am-2.component';
import { SieuAm4Component } from './sieu-am-4.component';
import { CTComponent } from './ct.component';
import { MRIComponent } from './mri.component';
import { TDCNComponent } from './tham-do-chuc-nang.component';
import { NoiSoi6Component } from './noi-soi-6-hinh.component';
import { NoiSoi2Component } from './noi-soi-2-hinh.component';
import { XetNghiemCDHAComponent } from './xet-nghiem-cdha.component';
import { XetNghiemChiSoComponent } from './xet-nghiem-chi-so.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path:'auth', component: AuthComponent},
  {path:'', component:HomeComponent},
  {path:'doppler', component: DopplerComponent},
  {path:'sieu-am-2-hinh', component: SieuAm2Component},
  {path:'sieu-am-4-hinh', component: SieuAm4Component},
  {path:'ct', component: CTComponent},
  {path:'mri', component: MRIComponent},
  {path:'tham-do-chuc-nang', component: TDCNComponent},
  {path:'noi-soi-6-hinh', component: NoiSoi6Component},
  {path:'noi-soi-2-hinh', component: NoiSoi2Component},
  {path:'xet-nghiem-cdha', component: XetNghiemCDHAComponent},
  {path:'xet-nghiem-chi-so', component: XetNghiemChiSoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
