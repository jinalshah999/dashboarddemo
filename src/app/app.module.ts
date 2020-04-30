import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import "hammerjs";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DemodashboardComponent } from './demodashboard/demodashboard.component';

@NgModule({
  declarations: [AppComponent, MainDashboardComponent, DemodashboardComponent],
  imports: [BrowserModule, ChartsModule, BrowserAnimationsModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
