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
  animations:[
    trigger("lhsDock",SLIDE_FROM_LEFT),
    trigger("rhsDock",SLIDE_FROM_RIGHT),
    trigger("entryList",SLIDE_FROM_TOP),
  ]
})
export class RoungePanelComponent implements OnInit {
  profile:RoungeProfile|null=null;
  entries:Entry[]=[]
  currentMatchUp:MatchUp|null=null;

  showEntries=false;
  showLHS=false;
  showRHS=false;

  get focusEntries(){
    let rtn:Entry[]=[];
    if(this.currentMatchUp?.seatOne){
      rtn.push(this.currentMatchUp.seatOne)
    }
    if(this.currentMatchUp?.seatTwo){
      rtn.push(this.currentMatchUp.seatTwo)
    }
    return rtn;
  }


  @ViewChild('ctrlTabs',{static:false}) ctrlTabs?:TabsetComponent; 
  submit(){

  }
  constructor(private entryManager:RoungeEntryManagerService) { 
    const today=new Date();
    this.profile=
    new RoungeProfile(
      "てきとーラウンジ",
      undefined,
      "©モンスターファーム2 コーエーテクモゲームス","参加受付は配信概要のフォームより",
      3,"https://script.google.com/macros/s/AKfycbymDsZ-YueOrnDkd4V_4TNfq7QZfzec-Nlia-P_aC2ARIHfa4a5m_WRQIHfI01GMtC-/exec",
      new Date(today.getFullYear(),today.getMonth(),today.getDate()),
      new Date(today.getFullYear(),today.getMonth(),today.getDate()+1)
    ),
    this.currentMatchUp=new MatchUp(null,null);
    entryManager.getEntryIn(this.profile.entryStart,this.profile.entryDeadline,this.profile.apiEndpoint).subscribe(list=>this.entries=list);
  }
  clear(){
    this.showLHS=false;
    this.showRHS=false;

    setTimeout(() => {
      this.currentMatchUp=null;
    }, 300);
  }
  set(){
    this.showLHS=true;
    this.showRHS=true;
  }
  selectTab(tabID:number){
    if(this.ctrlTabs?.tabs[tabID]){
      this.ctrlTabs.tabs[tabID].active=true;
    }
  }
  ngOnInit(): void {
    this.selectTab(0);
  }

}
