import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    HighchartsChartModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
