import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DopplerComponent} from './doppler.component';
import { TableComponent } from './table.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { SieuAm2Component } from './sieu-am-2.component';
import { SieuAm4Component } from './sieu-am-4.component';
import { CTComponent } from './ct.component';
import { MRIComponent } from './mri.component';
import { TDCNComponent } from './tham-do-chuc-nang.component';
import { NoiSoi6Component } from './noi-soi-6-hinh.component';
import { NoiSoi2Component } from './noi-soi-2-hinh.component';
import { XetNghiemCDHAComponent } from './xet-nghiem-cdha.component';
import { XetNghiemChiSoComponent } from './xet-nghiem-chi-so.component';
import { Header1Component } from './header1.component';
import { FooterComponent } from './footer-component';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    HeaderComponent,
    DopplerComponent,
    TableComponent,
    SieuAm2Component,
    SieuAm4Component,
    CTComponent,
    MRIComponent,
    TDCNComponent,
    NoiSoi6Component,
    NoiSoi2Component,
    XetNghiemCDHAComponent,
    XetNghiemChiSoComponent,
    Header1Component,
    FooterComponent,
    AuthComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
