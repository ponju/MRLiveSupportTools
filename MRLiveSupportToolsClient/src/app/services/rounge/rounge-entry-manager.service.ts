import { HttpBackend, HttpClient, HttpContext, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, map, from as rxFrom } from "rxjs";

import Entry from 'src/app/rounge-panel/model/entry';
import EntryDTO from 'src/app/rounge-panel/dto/entry';

@Injectable({
  providedIn: 'root'
})
export class RoungeEntryManagerService {
  entries: Entry[] = [];
  done: Entry[] = [];
  latestUpdate?: Date;
  private http: HttpClient;

  constructor(private backend: HttpBackend) {
    this.http = new HttpClient(backend);
  }
  getEntryDuring(from: Date | undefined = undefined, till: Date | undefined = undefined, endPoint: string) {
    let now = new Date();

    from = this.latestUpdate==undefined ? (from==undefined? new Date(now.getFullYear(), now.getMonth(), now.getDate()):from):this.latestUpdate;

    if (till == undefined) {
      till = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59);
    }

    let requestURL = endPoint + `?from=${from.getTime()}` + `&till=${till.getTime()}`
    console.log(requestURL);

    return this.http.get<EntryDTO[]>(requestURL).pipe(
      map(arr => {
        if (arr.length > 0) {
          this.latestUpdate = new Date();
        }
        return arr.map(dto => new Entry(new Date(dto.timeStamp), dto.entryName, dto.playerName, dto.playableName))
      })
    );
  }
}