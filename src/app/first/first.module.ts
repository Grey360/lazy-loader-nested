import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';
import { FirstSiblingModule } from '../first-sibling/first-sibling.module';

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    FormsModule,
    FirstRoutingModule,
    FirstSiblingModule
  ],
  exports: [FirstComponent]
})
export class FirstModule { }
