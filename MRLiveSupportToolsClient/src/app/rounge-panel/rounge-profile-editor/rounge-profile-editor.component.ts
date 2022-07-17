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


  constructor() { }

  ngOnInit(): void {
  }

}
