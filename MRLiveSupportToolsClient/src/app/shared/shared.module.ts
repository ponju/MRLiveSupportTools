import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule,
    ButtonsModule,
    NgxSpinnerModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    ButtonsModule, TabsModule,NgxSpinnerModule,HttpClientModule
  ]
})
export class SharedModule { }
