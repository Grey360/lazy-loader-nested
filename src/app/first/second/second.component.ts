import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log(this.router);
    console.log(this.route)
  }

  ngOnInit() {
  }

}
