import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import Entry from '../model/entry';
import MatchUp from '../model/match-up';

@Component({
  selector: 'rounge-entry-list',
  templateUrl: './rounge-entry-list.component.html',
  styleUrls: ['./rounge-entry-list.component.scss']
})
export class RoungeEntryListComponent implements OnInit {
  @Input()
  entries:Entry[]=[];
  @Input()
  done:Entry[]=[];
  @Output()
  syncAction:EventEmitter<void>=new EventEmitter();
  @Input()
  champInfo:null|{champ:Entry,winCount:number}=null;

  constructor() { }
  sync(){
    this.syncAction.emit();
  }

  ngOnInit(): void {
  }
}
