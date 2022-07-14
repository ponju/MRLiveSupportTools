import { MatchUpSideComponent } from './match-up-side/match-up-side.component';
import { NgModule } from '@angular/core';
import { RoungeDashboardComponent } from './rounge-dashboard/rounge-dashboard.component';
import { RoungeEntryListComponent } from './rounge-entry-list/rounge-entry-list.component';
import { RoungeHostUtilitiesComponent } from './rounge-host-utilities/rounge-host-utilities.component';
import { RoungePanelRoutingModule } from './rounge-panel-routing.module';
import { RoungeProfileEditorComponent } from './rounge-profile-editor/rounge-profile-editor.component';
import { RoungeViewSwitcherComponent } from './rounge-view-switcher/rounge-view-switcher.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    RoungeDashboardComponent,
    RoungeProfileEditorComponent,
    RoungeHostUtilitiesComponent,
    RoungeEntryListComponent,
    RoungeViewSwitcherComponent,
    MatchUpSideComponent,
  ],
  imports: [
    SharedModule,
    RoungePanelRoutingModule,
  ],
  exports: [
    RoungeProfileEditorComponent,
    RoungeHostUtilitiesComponent
  ],
})
export class RoungePanelModule { }
