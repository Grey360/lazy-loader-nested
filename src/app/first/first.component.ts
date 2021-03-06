import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { First } from '../shared/First.class';
import { TestApiCallService } from '../services/test-api-call/test-api-call.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  first: First;
  showSibling = false;
  data = 'first';
  showSecond = true;
  buttonText = 'Hide second';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private testApiService: TestApiCallService
  ) {
    console.log(this.router);
    console.log(this.route);
  }

  ngOnInit() {
    this.testShare();
    console.log(this.data);
  }

  revealSibling() {
    this.showSibling = !this.showSibling;
  }

  testShare() {
    this.testApiService.changeShare(this.data);
    this.testApiService.currentData.subscribe(data => {
      this.data = data;
    });
  }

  toggleSecond() {
    this.showSecond = !this.showSecond;
    this.buttonText = this.showSecond ? 'Hide second' : 'Show second';
  }
}
