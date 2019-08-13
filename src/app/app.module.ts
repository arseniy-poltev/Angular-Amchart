import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { ServiceComponent } from './service/service.component';
import { CityComponent } from './city/city.component';
import { FooterComponent } from './footer/footer.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { DataresultComponent } from './dataresult/dataresult.component';
import { KansasComponent } from './kansas/kansas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { SanfranciscoComponent } from './sanfrancisco/sanfrancisco.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import {NgbModule, NgbPaginationModule, NgbAlertModule, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    ServiceComponent,
    CityComponent,
    FooterComponent,
    DataComponent,
    HomeComponent,
    DataresultComponent,
    KansasComponent,
    ChicagoComponent,
    NewyorkComponent,
    SanfranciscoComponent,
    ChartComponent,
    NgbPagination
  ],
  imports: [ReactiveFormsModule, BrowserModule, AppRoutingModule, HttpClientModule, ChartsModule],
  entryComponents: [
    KansasComponent,
    ChicagoComponent,
    NewyorkComponent,
    SanfranciscoComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
