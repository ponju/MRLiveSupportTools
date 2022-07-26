import { Component, Input, OnInit, ViewChild } from '@angular/core';
import MatchUp, { RoundResult } from './model/match-up';
import { Observable, observable } from 'rxjs';
import { SLIDE_FROM_LEFT, SLIDE_FROM_RIGHT } from '../anims/component/slide';

import Entry from './model/entry';
import { RoungeEntryManagerService } from './../services/rounge/rounge-entry-manager.service';
import RoungeProfile from './model/rounge-context';
import { SLIDE_FROM_TOP } from './../anims/component/slide';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { generateExcudeTransitions } from 'src/app/anims/panel-switch/excude';
import { trigger } from '@angular/animations';

@Component({
  selector: 'rounge-dashboard',
  templateUrl: './rounge-panel.component.html',
  styleUrls: ['./rounge-panel.component.scss'],
  animations: [
    trigger("lhsDock", SLIDE_FROM_LEFT),
    trigger("rhsDock", SLIDE_FROM_RIGHT),
    trigger("entryList", SLIDE_FROM_TOP),
  ]
})
export class RoungePanelComponent implements OnInit {
  profile: RoungeProfile | null = null;
  entries: Entry[] = [];
  done: Entry[] = [];

  get activeMatchUp(){
    return this.histories[this.activeMatchUpIndex];
  }
  activeMatchUpIndex=0;

  histories:MatchUp[]=[];

  showEntries = true;
  showLHS = false;
  showRHS = false;

  hasLoadOnce = false;

  nextMatch(){
    if(this.activeMatchUpIndex<this.histories.length){
      this.activeMatchUpIndex++;
    }
  }
  reviewMatch(){
    if(this.activeMatchUpIndex>0){
      this.activeMatchUpIndex--;
    }
  }
  reviewFirstMatch(){
    this.activeMatchUpIndex=0;
  }

  get ready() {
    return this.activeMatchUp.ready;
  }

  get focusEntries() {
    let rtn: Entry[] = [];
    if (this.activeMatchUp?.seatOne) {
      rtn.push(this.activeMatchUp.seatOne)
    }
    if (this.activeMatchUp?.seatTwo) {
      rtn.push(this.activeMatchUp.seatTwo)
    }
    return rtn;
  }


  @ViewChild('ctrlTabs', { static: false }) ctrlTabs?: TabsetComponent;
  submit() {

  }
  constructor(public entryManager: RoungeEntryManagerService) {
    const today = new Date();
    this.profile =
      new RoungeProfile(
        "てきとーラウンジ",
        undefined,
        "©モンスターファーム2 コーエーテクモゲームス", "参加受付は配信概要のフォームより",
        3, "https://script.google.com/macros/s/AKfycbxSjkT-vAAtrGNZ29rWJgYktimY1stcd0d1FInxYH95qsZW8kbzIhjoOSTmW5yzO_wF/exec",
        new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
      ),
      this.activeMatchUpIndex=0;
      this.histories.push(new MatchUp(null,null));
  }
  clear() {
    this.showLHS = false;
    this.showRHS = false;

    setTimeout(() => {
      this.activeMatchUp.clear();
    }, 300);
  }

  initialSetup() {
    this.showRHS = false;
    this.showLHS = false;

    if (this.profile?.apiEndpoint)
      this.entryManager.getEntryDuring(this.profile?.entryStart, this.profile?.entryDeadline, this.profile?.apiEndpoint).subscribe((entries) => {
        entries.forEach(e => this.entries.push(e));
        setTimeout(() => {
          if (this.activeMatchUp.seatOne == null) {
            let one = this.entries.shift();
            if (one) {
              this.activeMatchUp.seatOne = one;
              this.showLHS = true;
              this.done.push(one);
            }
          }
          if (this.activeMatchUp.seatTwo == null) {
            let two = this.entries.shift();
            if (two) {
              this.activeMatchUp.seatTwo = two;
              this.showRHS = true;
              this.done.push(two);
            }
          }
          if (this.activeMatchUp.ready) {
            this.hasLoadOnce = true;
            this.showEntries = false;
          }
        }, 1000)
      });
  }

  championContinue() {
    this.showRHS = false;

    if (this.profile?.apiEndpoint) {
      this.entryManager.getEntryDuring(this.profile?.entryStart, this.profile?.entryDeadline, this.profile?.apiEndpoint).subscribe((entries) => {
        entries.forEach(e => this.entries.push(e));
        setTimeout(() => {
          this.histories.push(new MatchUp(this.activeMatchUp.seatOne, null));
          this.activeMatchUpIndex=this.histories.length-1;
          let next = this.entries.shift();
          if (next) {
            this.done.push(next);
            this.showRHS = true;
            this.activeMatchUp.seatTwo = next;
          }
        }, 1000)
      });
    }
  }
  championShift() {
    this.showLHS = false;
    this.showRHS = false;

    setTimeout(() => {
      this.histories.push(new MatchUp(this.activeMatchUp.seatTwo, null));
      this.activeMatchUpIndex=this.histories.length-1;
      this.showLHS = true;
      let next = this.entries.shift();
      if (next) {
        this.done.push(next);
        this.showRHS = true;
        this.activeMatchUp.seatTwo = next;
      }
    }, 1000)
  }

  revert(){

  }

  decline(match:MatchUp){
    this.showRHS=false;
    this.showLHS=false;
    setTimeout(()=>{
      if(this.histories.length<2){
        return;
      }

      if(match.seatTwo){
        this.entries.unshift(match.seatTwo);
      }
      this.histories.splice(this.histories.findIndex((e)=>e==match),1);
      if(this.activeMatchUpIndex>this.histories.length-1){
        this.activeMatchUpIndex=this.histories.length;
      }
      this.showRHS=true;
      this.showLHS=true;  
    },1000)
  }

  selectTab(tabID: number) {
    if (this.ctrlTabs?.tabs[tabID]) {
      this.ctrlTabs.tabs[tabID].active = true;
    }
  }
  syncList() {
    if (this.profile) {
      this.entryManager.getEntryDuring(this.profile.entryStart, this.profile.entryDeadline, this.profile.apiEndpoint)
        .subscribe(list => {
          list.forEach(e => this.entries.push(e)); console.log(this.entries.length);
        });
    }
  }
  ngOnInit(): void {
    this.selectTab(1);
  }
}
