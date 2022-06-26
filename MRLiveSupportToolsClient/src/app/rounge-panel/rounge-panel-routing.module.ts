import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RoungeDashboardComponent } from './rounge-dashboard/rounge-dashboard.component';

const routes: Routes = [
  {path:"",component:RoungeDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoungePanelRoutingModule { }
