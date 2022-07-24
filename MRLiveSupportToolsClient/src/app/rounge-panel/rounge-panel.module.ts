import { MatchUpSideComponent } from './match-up-side/match-up-side.component';
import { NgModule } from '@angular/core';
import { RoungeEntryListComponent } from './rounge-entry-list/rounge-entry-list.component';
import { RoungePanelComponent } from './rounge-panel.component';
import { RoungePanelRoutingModule } from './rounge-panel-routing.module';
import { RoungeProfileEditorComponent } from './rounge-profile-editor/rounge-profile-editor.component';
import { SharedModule } from './../shared/shared.module';
import { MatchUpProfileEditorComponent } from './match-up-profile-editor/match-up-profile-editor.component';

@NgModule({
  declarations: [
    RoungePanelComponent,
    RoungeProfileEditorComponent,
    RoungeEntryListComponent,
    MatchUpSideComponent,
    MatchUpProfileEditorComponent,
  ],
  imports: [
    SharedModule,
    RoungePanelRoutingModule,
  ],
  exports: [
    RoungeProfileEditorComponent,
  ],
})
export class RoungePanelModule { }
