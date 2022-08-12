import * as moment from 'moment';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { EntryLoaderOption } from '../model/entry-loader-option';
import RoungeProfile from '../model/rounge-profile';

@Component({
  selector: 'rounge-config-editor',
  templateUrl: './rounge-config-editor.component.html',
  styleUrls: ['./rounge-config-editor.component.scss'],
})
export class RoungeConfigEditorComponent implements OnInit {
  @Input()
  profile?:RoungeProfile;
  @Input()
  loaderOption?:EntryLoaderOption
  @Input()
  hasLoadedOnce:boolean=false;
  @Output()
  initialSync:EventEmitter<void>=new EventEmitter();

  entryStart?:string="";
  entryDeadline?:string="";

  constructor() { }

  dateTimeFormat="yyyy-MM-DDTHH:mm:ss";

  ngOnInit(): void {
    this.entryStart=this.loaderOption?.entryStart?.format(this.dateTimeFormat);
    this.entryDeadline=this.loaderOption?.entryDeadline.format(this.dateTimeFormat);

  }

  onEntryStartChanged(event:any){
    if(this.loaderOption){
      this.loaderOption.entryStart=moment(event.target.value);
      this.entryStart=this.loaderOption.entryStart.format(this.dateTimeFormat);
    }
  }
  onDeadlineChanged(event:any){
    if(this.loaderOption){
      this.loaderOption.entryDeadline=moment(event.target.value);
      this.entryDeadline=this.loaderOption.entryDeadline.format(this.dateTimeFormat);
    }
}

}
