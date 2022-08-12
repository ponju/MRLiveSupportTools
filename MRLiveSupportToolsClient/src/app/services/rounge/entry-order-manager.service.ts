import Entry from 'src/app/rounge-panel/model/entry';
import { GSSEntryLoaderService } from './gss-entry-loader.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntryOrderManagerService {
  allEntries:Entry[]=[];

  readyEntries:Entry[]=[];
  finishedEntries:Entry[]=[];

  latestUpdated?:Date;

  constructor(private loader:GSSEntryLoaderService) { }
}
