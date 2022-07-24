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
  currentMatchUp: MatchUp;

  showEntries = true;
  showLHS = false;
  showRHS = false;

  hasLoadOnce = false;

  get ready() {
    return this.currentMatchUp.ready;
  }

  get focusEntries() {
    let rtn: Entry[] = [];
    if (this.currentMatchUp?.seatOne) {
      rtn.push(this.currentMatchUp.seatOne)
    }
    if (this.currentMatchUp?.seatTwo) {
      rtn.push(this.currentMatchUp.seatTwo)
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
      this.currentMatchUp = new MatchUp(null, null);
    this.syncList();
  }
  clear() {
    this.showLHS = false;
    this.showRHS = false;

    setTimeout(() => {
      this.currentMatchUp.clear();
    }, 300);
  }

  initialSetup() {
    this.showRHS = false;
    this.showLHS = false;

    if (this.profile?.apiEndpoint)
      this.entryManager.getEntryDuring(this.profile?.entryStart, this.profile?.entryDeadline, this.profile?.apiEndpoint).subscribe((entries) => {
        this.entries.splice(0, this.entries.length);
        entries.forEach(e => this.entries.push(e));
        setTimeout(() => {
          if (this.currentMatchUp.seatOne == null) {
            let one = this.entries.shift();
            if (one) {
              this.currentMatchUp.seatOne = one;
              this.showLHS = true;
              this.done.push(one);
            }
          }
          if (this.currentMatchUp.seatTwo == null) {
            let two = this.entries.shift();
            if (two) {
              this.currentMatchUp.seatTwo = two;
              this.showRHS = true;
              this.done.push(two);
            }
          }
          if (this.currentMatchUp.ready) {
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
          this.currentMatchUp = new MatchUp(this.currentMatchUp.seatOne, null);
          let next = this.entries.shift();
          if (next) {
            this.done.push(next);
            this.showRHS = true;
            this.currentMatchUp.seatTwo = next;
          }
        }, 1000)
      });
    }
  }
  championShift() {
    this.showLHS = false;
    this.showRHS = false;

    setTimeout(() => {
      this.currentMatchUp = new MatchUp(this.currentMatchUp.seatTwo, null);
      this.showLHS = true;
      let next = this.entries.shift();
      if (next) {
        this.done.push(next);
        this.showRHS = true;
        this.currentMatchUp.seatTwo = next;
      }
    }, 1000)
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
