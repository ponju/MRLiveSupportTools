import { MatchUpProfileEditorComponent } from './match-up-profile-editor/match-up-profile-editor.component';
import { MatchUpSideComponent } from './match-up-side/match-up-side.component';
import { NgModule } from '@angular/core';
import { RoungeConfigEditorComponent } from './rounge-config-editor/rounge-config-editor.component';
import { RoungeEntryListComponent } from './rounge-entry-list/rounge-entry-list.component';
import { RoungePanelComponent } from './rounge-panel.component';
import { RoungePanelRoutingModule } from './rounge-panel-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    RoungePanelComponent,
    RoungeConfigEditorComponent,
    RoungeEntryListComponent,
    MatchUpSideComponent,
    MatchUpProfileEditorComponent,
  ],
  imports: [
    SharedModule,
    RoungePanelRoutingModule,
  ],
  exports: [
    RoungeConfigEditorComponent,
  ],
})
export class RoungePanelModule { }
