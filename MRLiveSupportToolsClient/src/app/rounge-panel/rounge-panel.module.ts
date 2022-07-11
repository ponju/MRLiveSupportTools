import { NgModule } from '@angular/core';
import { RoungeDashboardComponent } from './rounge-dashboard/rounge-dashboard.component';
import { RoungeHostUtilitiesComponent } from './rounge-host-utilities/rounge-host-utilities.component';
import { RoungePanelRoutingModule } from './rounge-panel-routing.module';
import { RoungeProfileEditorComponent } from './rounge-profile-editor/rounge-profile-editor.component';
import { SharedModule } from './../shared/shared.module';
import { RoungeEntryListComponent } from './rounge-entry-list/rounge-entry-list.component';
@NgModule({
  declarations: [
    RoungeDashboardComponent,
    RoungeProfileEditorComponent,
    RoungeHostUtilitiesComponent,
    RoungeEntryListComponent,
  ],
  imports: [
    SharedModule,
    RoungePanelRoutingModule,
  ],
  exports: [
    RoungeProfileEditorComponent,
    RoungeHostUtilitiesComponent
  ]
})
export class RoungePanelModule { }
