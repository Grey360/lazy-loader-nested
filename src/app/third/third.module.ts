import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdRoutingModule } from './third-routing.module';
import { ThirdComponent } from './third.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ThirdComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ThirdRoutingModule
  ],
  exports: [ThirdComponent]
})
export class ThirdModule { }
