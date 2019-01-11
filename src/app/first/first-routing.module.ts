import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first.component';

const routes: Routes = [
  { 
    path: '',
    component: FirstComponent,
    redirectTo: '1',
    pathMatch: 'full' 
  },
  {
    path: ':firstnumber',
    component: FirstComponent,
    children: [
      { path: 'second', loadChildren: './second/second.module#SecondModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
