import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

import { ANIMATION_TAG } from './anims/animations';
import { Component } from '@angular/core';
import { generateExcludeTransitions } from './anims/excude';
import { trigger } from '@angular/animations';

const ROUTING_ANIMATION = "routeAnimations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:
    [
      trigger("routeAnimations",
        generateExcludeTransitions(
          ["Dashboard", "Rounge"], 0.5, 0.5
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