import Entry from 'src/app/rounge-panel/model/entry';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoungeEntryManagerService {
  entries:Entry[]=[];
  done:Entry[]=[];

  constructor() { }
  loadFromGSS(){

  }
  pushResult(){

  }
}
