import { Component, OnInit, Input } from '@angular/core';
import { First } from '@shared/First.class';

@Component({
  selector: 'app-first-sibling',
  templateUrl: './first-sibling.component.html',
  styleUrls: ['./first-sibling.component.scss']
})
export class FirstSiblingComponent implements OnInit {
  @Input() first: First;

  constructor() { }

  ngOnInit() {
    console.log(this.first);
  }

}
