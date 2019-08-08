import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-numbers-numbers',
  templateUrl: './numbers-numbers.component.html',
  styleUrls: ['./numbers-numbers.component.scss']
})
export class NumbersNumbersComponent implements OnInit {

  @Input() num : any = {};

  constructor() { }

  ngOnInit() {
  }

}
