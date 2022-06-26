import { ButtonRadioDirective, ButtonRadioGroupDirective } from 'ngx-bootstrap/buttons';
import { Component, Input, OnInit } from '@angular/core';

import RoungeContext from 'src/data/model/rounge-context';

@Component({
  selector: 'rounge-host-utilities',
  templateUrl: './rounge-host-utilities.component.html',
  styleUrls: ['./rounge-host-utilities.component.scss'],
})
export class RoungeHostUtilitiesComponent implements OnInit {
  @Input()
  context!:RoungeContext;
  radioModel?:unknown
  constructor() { }

  ngOnInit(): void {
  }

}

export class GameResult{
  /**
   *
   */
  constructor(public winnerSide:string) {
  }
}