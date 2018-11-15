import { BloodBankAPIService } from './blood-bank-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ShowDonarsComponent } from './show-donars/show-donars.component';
import { FindDonarComponent } from './find-donar/find-donar.component';
import { MenuComponent } from './menu/menu.component';
import { SearchHospitalComponent } from './search-hospital/search-hospital.component';
import { ShowHospitalComponent } from './show-hospital/show-hospital.component';
import { CampDetailsComponent } from './camp-details/camp-details.component';
import { PastCampsComponent } from './past-camps/past-camps.component';
import { FutureCampsComponent } from './future-camps/future-camps.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ShowDonarsComponent,
    FindDonarComponent,
    MenuComponent,
    SearchHospitalComponent,
    ShowHospitalComponent,
    CampDetailsComponent,
    PastCampsComponent,
    FutureCampsComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
