import { Component, Input, OnInit } from '@angular/core';
import { generateExcudeTransitions, generateWildcardTransition } from 'src/app/anims/panel-switch/excude';

import Entry from '../model/entry';
import { trigger } from '@angular/animations';

@Component({
  selector: 'match-up-side',
  templateUrl: './match-up-side.component.html',
  styleUrls: ['./match-up-side.component.scss'],
})
export class MatchUpSideComponent implements OnInit {
  @Input()
  playerSide:number=0;
  @Input()
  seat:Entry|null=null;
  @Input()
  wins:number=0;

  get winArray(){
    let rtn:number[]=[]
    for (let index = 0; index < this.wins; index++) {
      rtn.push(index);
    }
    return rtn;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
