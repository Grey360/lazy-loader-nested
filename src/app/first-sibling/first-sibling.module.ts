import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstSiblingRoutingModule } from './first-sibling-routing.module';
import { FirstSiblingComponent } from './first-sibling.component';

@NgModule({
  declarations: [FirstSiblingComponent],
  imports: [
    CommonModule,
    FirstSiblingRoutingModule
  ],
  exports: [FirstSiblingComponent]
})
export class FirstSiblingModule { }
