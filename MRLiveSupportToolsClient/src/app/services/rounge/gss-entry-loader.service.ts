import { HttpBackend, HttpClient, HttpContext, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, map, from as rxFrom } from "rxjs";

import Entry from 'src/app/rounge-panel/model/entry';
import EntryDTO from 'src/app/rounge-panel/dto/entry';
import { EntryLoaderOption } from './../../rounge-panel/model/entry-loader-option';

@Injectable({
  providedIn: 'root'
})
export class GSSEntryLoaderService {
  private http: HttpClient;

  constructor(private backend: HttpBackend) {
    this.http = new HttpClient(backend);
  }
  getEntry( options:EntryLoaderOption) {
    let requestURL = options.apiEndpoint + `?from=${options.entryStart.toDate().getTime()}` + `&till=${options.entryDeadline.toDate().getTime()}`
    console.log(requestURL);

    return this.http.get<EntryDTO[]>(requestURL).pipe(
      map(arr => {
        return arr.map(dto => new Entry(new Date(dto.timeStamp), dto.entryName, dto.playerName, dto.playableName))
      })
    );
  }
}