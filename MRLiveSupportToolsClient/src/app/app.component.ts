import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

import { ANIMATION_TAG } from './anims/animations';
import { Component } from '@angular/core';
import { generateExcudeTransitions } from './anims/panel-switch/excude';
import { trigger } from '@angular/animations';

const ROUTING_ANIMATION = "routeAnimations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:
    [
      trigger("routeAnimations",
        generateExcudeTransitions(
          ["Dashboard", "Rounge"], 1, 1
        )
      )
    ]
})
export class AppComponent {
  title = 'MRLiveSupportTools'
  toggle = false;
  radioModel:any;
  constructor(private _contexts: ChildrenOutletContexts) {
  }

  getPanelName(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData[ANIMATION_TAG]
    );
  }
}