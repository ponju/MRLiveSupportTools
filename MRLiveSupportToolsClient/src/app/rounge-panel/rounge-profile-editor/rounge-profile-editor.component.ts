import { Component, Input, OnInit } from '@angular/core';

import RoungeContext from '../model/rounge-context';

@Component({
  selector: 'rounge-profile-editor',
  templateUrl: './rounge-profile-editor.component.html',
  styleUrls: ['./rounge-profile-editor.component.scss'],
})
export class RoungeProfileEditorComponent implements OnInit {
  @Input()
  context!:RoungeContext;


  constructor() { }

  ngOnInit(): void {
  }

}
