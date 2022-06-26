import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardPanelModule } from './dashboard-panel/dashboard-panel.module';
import { RoungePanelModule } from './rounge-panel/rounge-panel.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

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
