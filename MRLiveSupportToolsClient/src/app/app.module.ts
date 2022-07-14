import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardPanelModule } from './dashboard-panel/dashboard-panel.module';
import { NgModule } from '@angular/core';
import { RoungePanelModule } from './rounge-panel/rounge-panel.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    DashboardPanelModule,
    RoungePanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
