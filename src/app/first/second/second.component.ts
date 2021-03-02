import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TestApiCallService } from 'src/app/services/test-api-call/test-api-call.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, OnDestroy {
  data = 'second';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private testApiService: TestApiCallService
  ) {
    console.log(this.router);
    console.log(this.route);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.testShare();
    console.log(this.data);
  }

  testShare() {
    this.testApiService.changeShare(this.data);
    this.testApiService.currentData.subscribe(data => {
      this.data = data;
    });
  }
}
