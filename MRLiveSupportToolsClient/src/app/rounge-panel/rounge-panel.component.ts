import * as moment from 'moment';

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import MatchUp, { RoundResult } from './model/match-up';
import { Observable, observable } from 'rxjs';
import { SLIDE_FROM_LEFT, SLIDE_FROM_RIGHT } from '../anims/component/slide';

import Entry from './model/entry';
import { EntryLoaderOption } from './model/entry-loader-option';
import { GSSEntryLoaderService } from '../services/rounge/gss-entry-loader.service';
import RoungeProfile from './model/rounge-profile';
import { SLIDE_FROM_TOP } from './../anims/component/slide';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { trigger } from '@angular/animations';
import { NgxSpinnerService } from 'ngx-spinner';

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
  profile?: RoungeProfile;
  loaderOption?: EntryLoaderOption
  entries: Entry[] = [];
  done: Entry[] = [];

  get activeMatchUp() {
    return this.histories[this.activeMatchUpIndex];
  }
  activeMatchUpIndex = 0;

  histories: MatchUp[] = [];

  showEntries = true;
  showLHS = false;
  showRHS = false;

  hasLoadedOnce = false;

  nextMatch() {
    if (this.activeMatchUpIndex < this.histories.length-1) {
      this.activeMatchUpIndex++;
      this.showLHS=this.activeMatchUp.seatOne!=undefined;
      this.showRHS=this.activeMatchUp.seatTwo!=undefined;
    }
  }
  reviewMatch() {
    if (this.activeMatchUpIndex > 0) {
      this.activeMatchUpIndex--;
      this.showLHS=this.activeMatchUp.seatOne!=undefined;
      this.showRHS=this.activeMatchUp.seatTwo!=undefined;
    }
  }
  reviewFirstMatch() {
    this.activeMatchUpIndex = 0;
  }

  get ready() {
    return this.activeMatchUp.ready;
  }

  get groundChampInfo() {
    let winCount = 0;
    let groundChamp: Entry | null = null;
    this.done.forEach((entry) => {
      let wins = this.histories.filter((m) => m.winner == entry);
      if (winCount < wins.length) {
        winCount = wins.length;
        groundChamp = entry;
      }
    });
    if (groundChamp) {
      return { champ: groundChamp, winCount: winCount }
    } else {
      return null;
    }
  }
  get championMatchCount() {
    return this.histories.filter(m => m.seatOne == this.activeMatchUp.seatOne).length;
  }

  @ViewChild('ctrlTabs', { static: false }) ctrlTabs?: TabsetComponent;
  submit() {

  }
  constructor(public entryManager: GSSEntryLoaderService, private spinner: NgxSpinnerService) {
    const today = moment();
    const morning = today.clone();
    morning.hour(0);
    morning.minute(0);
    morning.second(0);
    const night = morning.clone();
    night.date(morning.date() + 1);
    this.profile =
      new RoungeProfile(
        "てきとーラウンジ",
        undefined,
        "©モンスターファーム2 コーエーテクモゲームス", "参加受付は配信概要のフォームより",
        3
      ),
      this.activeMatchUpIndex = 0;
    this.histories.push(new MatchUp(undefined, undefined));
    this.loaderOption = new EntryLoaderOption("https://script.google.com/macros/s/AKfycbxSjkT-vAAtrGNZ29rWJgYktimY1stcd0d1FInxYH95qsZW8kbzIhjoOSTmW5yzO_wF/exec",
      morning,
      night
    )
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

    if (this.loaderOption?.apiEndpoint) {
      this.spinner.show();
      this.entryManager.getEntry(this.loaderOption).subscribe((entries) => {
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
            this.hasLoadedOnce = true;
            this.showEntries = false;
          }
          if(this.loaderOption){
            this.loaderOption.entryStart=moment();
          }

          this.spinner.hide();
        }, 1000)
      });
    }
  }

  championContinue() {
    this.showRHS = false;
    if (!this.loaderOption) {
      return;
    }

    if (this.loaderOption.apiEndpoint) {
      this.spinner.show();
      this.entryManager.getEntry(this.loaderOption).subscribe((entries) => {
        entries.forEach(e => this.entries.push(e));
        setTimeout(() => {
          let next = this.entries.shift();
          if (this.activeMatchUp.seatTwo) {
            this.histories.push(new MatchUp(this.activeMatchUp.seatOne, undefined));
            this.activeMatchUpIndex = this.histories.length - 1;
          }
          if (next) {
            this.done.push(next);
            this.showRHS = true;
            this.activeMatchUp.seatTwo = next;
          }


          if (this.loaderOption) {
            this.loaderOption.entryStart = moment();
          }
          this.spinner.hide();
        }, 1000)
      });
    }
  }
  championShift() {
    if (!this.activeMatchUp.seatTwo) {
      console.error("No challenger defined");
      return;
    }

    this.showLHS = false;
    this.showRHS = false;

    setTimeout(() => {
      this.histories.push(new MatchUp(this.activeMatchUp.seatTwo, undefined));
      this.activeMatchUpIndex = this.histories.length - 1;
      this.showLHS = true;
      let next = this.entries.shift();
      if (next) {
        this.done.push(next);
        this.showRHS = true;
        this.activeMatchUp.seatTwo = next;
      }
    }, 1000)
  }

  revert() {

  }

  decline(match: MatchUp) {
    this.showRHS = false;
    this.showLHS = false;
    setTimeout(() => {
      if (this.histories.length < 2) {
        return;
      }

      if (match.seatTwo) {
        this.entries.unshift(match.seatTwo);
      }
      this.histories.splice(this.histories.findIndex((e) => e == match), 1);
      if (this.activeMatchUpIndex > this.histories.length - 1) {
        this.activeMatchUpIndex = this.histories.length;
      }
      this.showRHS = true;
      this.showLHS = true;
    }, 1000)
  }

  selectTab(tabID: number) {
    if (this.ctrlTabs?.tabs[tabID]) {
      this.ctrlTabs.tabs[tabID].active = true;
    }
  }
  syncList() {
    if (this.loaderOption) {
      this.entryManager.getEntry(this.loaderOption)
        .subscribe(list => {
          list.forEach(e => this.entries.push(e)); console.log(this.entries.length);
        });
    }
  }
  ngOnInit(): void {
    this.selectTab(1);
  }
}
