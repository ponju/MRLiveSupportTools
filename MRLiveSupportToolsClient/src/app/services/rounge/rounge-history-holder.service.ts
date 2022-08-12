import Entry from 'src/app/rounge-panel/model/entry';
import { GSSEntryLoaderService } from './gss-entry-loader.service';
import { Injectable } from '@angular/core';
import MatchUp from 'src/app/rounge-panel/model/match-up';

interface IRoungeHistoryHolderService{

}

@Injectable({
  providedIn: 'root'
})
export class RoungeHistoryHolderService implements IRoungeHistoryHolderService{
  matchupList:MatchUp[]=[];
  fightRecord:FightRecord[]=[];
  
  get groundChampionRecord(){
    let champion:FightRecord;
    if(this.fightRecord.length<1){
      return undefined;
    }else{
      champion=this.fightRecord[0];
      this.fightRecord.forEach((v)=>{if(v.winCount>champion.winCount){
        champion=v;
      }})
    }
    return champion;
  }

  constructor(private loader:GSSEntryLoaderService) { 

  }
}

class FightRecord{
  get winCount(){
    return this.matches.length-1;
  }
  constructor(public entry:Entry,public matches:MatchUp[]) {
  }
}