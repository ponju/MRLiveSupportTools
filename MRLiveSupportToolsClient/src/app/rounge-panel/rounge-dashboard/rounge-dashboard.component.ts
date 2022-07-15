import { Component, Input, OnInit, ViewChild } from '@angular/core';
import MatchUp, { RoundResult } from '../model/match-up';
import { SLIDE_FROM_LEFT, SLIDE_FROM_RIGHT } from './../../anims/component/slide';

import Entry from '../model/entry';
import { Observable } from 'rxjs';
import RoungeContext from '../model/rounge-context';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { generateExcudeTransitions } from 'src/app/anims/panel-switch/excude';
import { trigger } from '@angular/animations';
import { RoungeInfoService } from '../../services/rounge-info/rounge-info-service.service';

@Component({
  selector: 'rounge-dashboard',
  templateUrl: './rounge-dashboard.component.html',
  styleUrls: ['./rounge-dashboard.component.scss'],
  animations:[
    trigger("lhsDock",SLIDE_FROM_LEFT),
    trigger("rhsDock",SLIDE_FROM_RIGHT)
  ]
})
export class RoungeDashboardComponent implements OnInit {
  context$:Observable<RoungeContext>;
  currentMatchUp:MatchUp|null=null;
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
  constructor(private roungeService:RoungeInfoService) { 
    this.context$=new Observable(
      observer=>{
        observer.next(new RoungeContext("MF2 2997 てきとーラウンジ","ぽんじゅ","©モンスターファーム2 コーエーテクモゲームス","参加受付は配信概要のフォームより",""))
        observer.complete();
      }
    )
    this.clear();
  }
  clear(){
    this.currentMatchUp=new MatchUp(null,null);
  }
  set(){
    const p1=      new Entry("ぽんじゅ","ぽんじゅ","ドンキフリーマス");
    const kujira=new Entry("くじら","くじら","とべます");

    this.currentMatchUp=new MatchUp(
      p1,
      kujira
    );
    this.currentMatchUp.pushRoundResult(RoundResult.SeatTwo);
    this.currentMatchUp.pushRoundResult(RoundResult.SeatTwo);
    this.currentMatchUp.pushRoundResult(RoundResult.Draw);
    this.currentMatchUp.pushRoundResult(RoundResult.SeatOne);
    this.currentMatchUp.pushRoundResult(RoundResult.SeatOne);

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
