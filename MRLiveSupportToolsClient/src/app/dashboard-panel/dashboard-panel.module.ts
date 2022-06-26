import { CommonModule } from '@angular/common';
import { DashboardPanelComponent } from './dashboard-panel.component';
import { DashboardPanelRoutingModule } from './dashboard-panel-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    DashboardPanelComponent,
  ],
  imports: [
    CommonModule,
    DashboardPanelRoutingModule
  ],
})
export class DashboardPanelModule { }
