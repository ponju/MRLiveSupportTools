import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RoungePanelComponent } from './rounge-panel.component';

const routes: Routes = [
  {path:"",component:RoungePanelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoungePanelRoutingModule { }
