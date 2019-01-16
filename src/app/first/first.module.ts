import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';
import { FirstSiblingModule } from '../first-sibling/first-sibling.module';
import { SecondModule } from './second/second.module';

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    FormsModule,
    FirstSiblingModule,
    SecondModule,
    FirstRoutingModule
  ],
  exports: [FirstComponent]
})
export class FirstModule { }
