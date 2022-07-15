import { Injectable } from '@angular/core';
import Entry from 'src/app/rounge-panel/model/entry';

@Injectable({
  providedIn: 'root'
})
export class RoungeInfoService {
  entries:Entry[]=[];
  done:Entry[]=[];
  
  constructor() { }
}
