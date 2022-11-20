import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { Constants } from './config/constants';
import { FormsModule } from '@angular/forms';
import { CovidDataService } from './core/services/covid-data.service';
import { GoogleChartBaseService } from './core/services/google-chart-base.service';
import { GoogleChartService } from './core/services/google-chart.service';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SearchComponent } from './components/search/search.component';
import { GChartComponent } from './components/g-chart/g-chart.component';
import { MapComponent } from './components/map/map.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    StatisticsComponent,
    SearchComponent,
    GChartComponent,
    MapComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    TableModule,
    ChartModule
  ],
  providers: [Constants, CovidDataService, GoogleChartBaseService, GoogleChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
