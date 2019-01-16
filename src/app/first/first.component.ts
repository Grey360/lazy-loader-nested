import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { First } from '../shared/First.class';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  first: First;
  showSibling = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log(this.router);
    console.log(this.route);
  }

  ngOnInit() {
  }

  revealSibling() {
    this.showSibling = !this.showSibling;
  }
}
