import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { WeatherService } from './weather.service';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CustomerComponent } from './customer/customer.component';
import { ExaminationComponent } from './examination/examination.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'setting',component:SettingComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'examination',component:ExaminationComponent
  },
  {
    path:'customer',component:CustomerComponent
  },
  {
    path:'certificates',component:CertificatesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent,
    CustomerComponent,
    ExaminationComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
