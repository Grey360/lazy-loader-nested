import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazy-loading-nested';
  showLoader = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log(this.router);
    console.log(this.route);
    this.toggleLoader();
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
}
