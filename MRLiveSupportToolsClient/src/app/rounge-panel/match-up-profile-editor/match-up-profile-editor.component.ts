import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import MatchUp from '../model/match-up';
import { RoundResult } from './../model/match-up';

@Component({
  selector: 'match-up-profile-editor',
  templateUrl: './match-up-profile-editor.component.html',
  styleUrls: ['./match-up-profile-editor.component.scss']
})
export class MatchUpProfileEditorComponent implements OnInit {
  @Input()
  matchUp:MatchUp=new MatchUp(null,null);
  @Input()
  matchNum:number=-1;
  @Input()
  hasLoadOnce=false;

  @Output()
  prevMatch=new EventEmitter();
  @Output()
  nextMatch=new EventEmitter();

  @Output()
  initialLoad=new EventEmitter();
  @Output()
  onRHSWins=new EventEmitter();
  @Output()
  onLHSWins=new EventEmitter();
  @Output()
  decline=new EventEmitter<MatchUp>();

  get lhs(){
    return this.matchUp?.seatOne;
  }
  get rhs(){
    return this.matchUp?.seatTwo;
  }

  pushRoundResult(result:0|1|2|-1){
    this.matchUp.pushRoundResult(result);
  }

  constructor() { }

  ngOnInit(): void {
  }
}