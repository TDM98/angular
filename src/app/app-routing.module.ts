import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { HomeComponent } from './home.component';
import { DopplerComponent } from './xet-nghiem/doppler/doppler.component';
import { Sieuam2Component } from './xet-nghiem/sieuam2/sieuam2.component';
import { Sieuam4Component } from './xet-nghiem/sieuam4/sieuam4.component';
import { CtComponent } from './xet-nghiem/ct/ct.component';
import { MriComponent } from './xet-nghiem/mri/mri.component';
import { ThamdochucnangComponent } from './xet-nghiem/thamdochucnang/thamdochucnang.component';
import { Noisoi6hinhComponent } from './xet-nghiem/noisoi6hinh/noisoi6hinh.component';
import { Noisoi2hinhComponent } from './xet-nghiem/noisoi2hinh/noisoi2hinh.component';
import { XetnghiemcdhaComponent } from './xet-nghiem/xetnghiemcdha/xetnghiemcdha.component';
import { XetnghiemchisoComponent } from './xet-nghiem/xetnghiemchiso/xetnghiemchiso.component';
import { ReportHeaderComponent } from './template/report-header/report-header.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'doppler', component: DopplerComponent },
  {path:'sieu-am-2-hinh', component: Sieuam2Component},
  {path:'sieu-am-4-hinh', component: Sieuam4Component},
  {path:'ct', component: CtComponent},
  {path:'mri', component: MriComponent},
  {path:'tham-do-chuc-nang', component: ThamdochucnangComponent},
  {path:'noi-soi-6-hinh', component: Noisoi6hinhComponent},
  {path:'noi-soi-2-hinh', component: Noisoi2hinhComponent},
  {path:'xet-nghiem-cdha', component: XetnghiemcdhaComponent},
  {path:'xet-nghiem-chi-so', component: XetnghiemchisoComponent},
  {path:'test', component: ReportHeaderComponent},
  { path: '**', pathMatch: 'full', component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
