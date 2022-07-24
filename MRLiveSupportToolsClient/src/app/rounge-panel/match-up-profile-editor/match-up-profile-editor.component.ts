import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import MatchUp from '../model/match-up';

@Component({
  selector: 'match-up-profile-editor',
  templateUrl: './match-up-profile-editor.component.html',
  styleUrls: ['./match-up-profile-editor.component.scss']
})
export class MatchUpProfileEditorComponent implements OnInit {
  @Input()
  matchUp:MatchUp=new MatchUp(null,null);
  @Input()
  hasLoadOnce=false;
  @Output()
  initialLoad=new EventEmitter();
  @Output()
  championShift=new EventEmitter();
  @Output()
  championContinue=new EventEmitter();

  get lhs(){
    return this.matchUp?.seatOne;
  }
  get rhs(){
    return this.matchUp?.seatTwo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
