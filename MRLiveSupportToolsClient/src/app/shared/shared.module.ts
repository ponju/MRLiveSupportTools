
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule,
    ButtonsModule
  ],
  exports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    ButtonsModule, TabsModule
  ]
})
export class SharedModule { }
