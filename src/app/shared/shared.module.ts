import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [KeysPipe],
  declarations: [KeysPipe]
})
export class SharedModule { }
