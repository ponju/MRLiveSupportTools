import { Component, Input, OnInit } from '@angular/core';
import Entry from '../model/entry';
import MatchUp from '../model/match-up';

@Component({
  selector: 'rounge-entry-list',
  templateUrl: './rounge-entry-list.component.html',
  styleUrls: ['./rounge-entry-list.component.scss']
})
export class RoungeEntryListComponent implements OnInit {
  entries:Entry[]=[];
  done:Entry[]=[];

  @Input()
  focusEntries:Entry[]=[];

  constructor() { }

  ngOnInit(): void {
    this.entries=[
      new Entry("ふぃん","フィン","ぶつりニンフィア"),
      new Entry("あっくん","あっくん","へびひめさま"),
      new Entry("くじら","くじら","とべます")
    ]
    if(!this.done.includes(this.entries[0])){
      this.done.push(this.entries[0])
    }
  }
}
