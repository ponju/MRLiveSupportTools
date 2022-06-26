import { ButtonRadioDirective, ButtonRadioGroupDirective } from 'ngx-bootstrap/buttons';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoungeDashboardComponent } from './rounge-dashboard/rounge-dashboard.component';
import { RoungeHostUtilitiesComponent } from './rounge-host-utilities/rounge-host-utilities.component';
import { RoungePanelRoutingModule } from './rounge-panel-routing.module';
import { RoungeProfileEditorComponent } from './rounge-profile-editor/rounge-profile-editor.component';
import { SharedModule } from './../shared/shared.module';
@NgModule({
  declarations: [
    RoungeDashboardComponent,
    RoungeProfileEditorComponent,
    RoungeHostUtilitiesComponent,
  ],
  imports: [
    SharedModule,
    RoungePanelRoutingModule,
  ],
  exports:[
    RoungeProfileEditorComponent,
    RoungeHostUtilitiesComponent
  ]
})
export class RoungePanelModule { }
