import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './home.component';
import { DopplerComponent } from './xet-nghiem/doppler/doppler.component';
import { NotfoundComponent } from './errors/notfound-page/notfound.component';
import { CtComponent } from './xet-nghiem/ct/ct.component';
import { MriComponent } from './xet-nghiem/mri/mri.component';
import { Noisoi2hinhComponent } from './xet-nghiem/noisoi2hinh/noisoi2hinh.component';
import { Noisoi6hinhComponent } from './xet-nghiem/noisoi6hinh/noisoi6hinh.component';
import { Sieuam2Component } from './xet-nghiem/sieuam2/sieuam2.component';
import { Sieuam4Component } from './xet-nghiem/sieuam4/sieuam4.component';
import { ThamdochucnangComponent } from './xet-nghiem/thamdochucnang/thamdochucnang.component';
import { XetnghiemcdhaComponent } from './xet-nghiem/xetnghiemcdha/xetnghiemcdha.component';
import { XetnghiemchisoComponent } from './xet-nghiem/xetnghiemchiso/xetnghiemchiso.component';
import { ReportHeaderComponent } from './template/report-header/report-header.component';
import { NotfoundItemComponent } from './errors/notfound-item/notfound-item.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DopplerComponent,
    NotfoundComponent,
    CtComponent,
    MriComponent,
    Noisoi2hinhComponent,
    Noisoi6hinhComponent,
    Sieuam2Component,
    Sieuam4Component,
    ThamdochucnangComponent,
    XetnghiemcdhaComponent,
    XetnghiemchisoComponent,
    ReportHeaderComponent,
    NotfoundItemComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}