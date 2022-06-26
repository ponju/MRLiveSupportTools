import { RouterModule, Routes } from '@angular/router';

import { ANIMATION_TAG } from './anims/animations';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: "",data:{ANIMATION_TAG:"Dashboard"} ,loadChildren: () => import("./dashboard-panel/dashboard-panel.module").then(m => m.DashboardPanelModule) },
  { path: "rounge",data:{ANIMATION_TAG:"Rounge"},loadChildren: () => import("./rounge-panel/rounge-panel.module").then(m => m.RoungePanelModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
