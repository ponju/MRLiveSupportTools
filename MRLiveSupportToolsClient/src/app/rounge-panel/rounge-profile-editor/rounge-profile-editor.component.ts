import { Component, Input, OnInit } from '@angular/core';

import RoungeProfile from '../model/rounge-context';

@Component({
  selector: 'rounge-profile-editor',
  templateUrl: './rounge-profile-editor.component.html',
  styleUrls: ['./rounge-profile-editor.component.scss'],
})
export class RoungeProfileEditorComponent implements OnInit {
  @Input()
  profile!:RoungeProfile;

  entry="";
  deadline=""

  constructor() { }

  ngOnInit(): void {
    this.entry=this.profile.entryStart.toISOString().slice(0,16);
    this.deadline=this.profile.entryDeadline.toISOString().slice(0,16);
  }

  onEntryStartChanged(event:any){
    this.profile.entryStart=new Date(new Date(event.target.value.slice(0,16)));
    this.entry=this.profile.entryStart.toISOString().slice(0,16);
  }
  onDeadlineChanged(event:any){
    this.profile.entryDeadline=new Date(new Date(event.target.value.slice(0,16)));
    this.deadline=this.profile.entryDeadline.toISOString().slice(0,16);
  }

}
