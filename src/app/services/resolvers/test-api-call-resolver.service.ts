import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { TestApiCallService } from '../test-api-call/test-api-call.service';

@Injectable({
  providedIn: 'root'
})
export class TestApiCallResolverService implements Resolve<any> {

  constructor(private testApiCallService: TestApiCallService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.testApiCallService.get().subscribe(
      test => {
        console.log(test);
        route.data.gitlab = test;
      },
      error => console.error(error),
      () => console.log('Random API call test finished.')
    )
  }
}
