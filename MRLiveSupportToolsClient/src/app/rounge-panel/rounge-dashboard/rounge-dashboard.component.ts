import { Component, OnInit, ViewChild } from '@angular/core';

import RoungeContext from 'src/data/model/rounge-context';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'rounge-dashboard',
  templateUrl: './rounge-dashboard.component.html',
  styleUrls: ['./rounge-dashboard.component.scss'],
})
export class RoungeDashboardComponent implements OnInit {
  context?:RoungeContext
  @ViewChild('ctrlTabs',{static:false}) ctrlTabs?:TabsetComponent; 
  submit(){

  }
  constructor() { }
  selectTab(tabID:number){
    if(this.ctrlTabs?.tabs[tabID]){
      this.ctrlTabs.tabs[tabID].active=true;
    }
  }
  ngOnInit(): void {
    this.context=new RoungeContext("MF2 2997 てきとーラウンジ","ぽんじゅ","©モンスターファーム2 コーエーテクモゲームス","参加受付は配信概要のフォームより","");
    this.selectTab(0);
  }

}
