import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestApiCallResolverService } from './services/resolvers/test-api-call-resolver.service';

const routes: Routes = [
  {
    path: 'first',
    loadChildren: './first/first.module#FirstModule'
  },
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full',
    resolve: {
      gitlab: TestApiCallResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
