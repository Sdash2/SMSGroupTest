import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule
  ],
  declarations: [],
  exports: [MaterialModule]
})
export class SharedModule { }
