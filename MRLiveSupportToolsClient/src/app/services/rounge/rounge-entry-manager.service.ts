import { HttpBackend, HttpClient, HttpContext, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import {Observable, map, from as rxFrom} from "rxjs";

import Entry from 'src/app/rounge-panel/model/entry';

@Injectable({
  providedIn: 'root'
})
export class RoungeEntryManagerService {
  entries:Entry[]=[];
  done:Entry[]=[];
  latestUpdate?:Date;
  private http:HttpClient;

  constructor(private backend:HttpBackend) {
    this.http=new HttpClient(backend);
   }
  getNext(){
    
  }
  getEntryIn(from:Date|undefined=undefined,till:Date|undefined=undefined,endPoint:string){
    let now=new Date();
    if(from==undefined){
      from=this.latestUpdate?this.latestUpdate:new Date(now.getFullYear(),now.getMonth(),now.getDate());
    }
    if(till==undefined){
      till=new Date(now.getFullYear(),now.getMonth(),now.getDate(),23,59);
    }
    
    let requestURL=endPoint+`?from=${from.toJSON()}`+`&till=${till.toJSON()}`
    this.latestUpdate=new Date();

    return this.http.get<Entry[]>(endPoint);
  }
}