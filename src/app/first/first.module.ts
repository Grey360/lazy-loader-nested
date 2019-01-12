import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';
import { SecondModule } from './second/second.module';

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    FirstRoutingModule,
    SecondModule
  ],
  exports: [FirstComponent]
})
export class FirstModule { }
