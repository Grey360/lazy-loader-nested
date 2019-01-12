import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { TestApiCallService } from './services/test-api-call/test-api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lazy-loading-nested';
  showLoader = true;
  data = 'app';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private testApiService: TestApiCallService
  ) {
    console.log(this.router);
    console.log(this.route);
    this.toggleLoader();
  }

  ngOnInit() {
    this.testShare();
    console.log(this.data);
  }

  toggleLoader(): void {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.showLoader = true;
        }
        if (event instanceof NavigationEnd) {
          this.showLoader = false;
        }
      }
    )
  }

  testShare() {
    this.testApiService.changeShare(this.data);
    this.testApiService.currentData.subscribe(data => {
      this.data = data;
    });
  }
}
