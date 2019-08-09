import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suplementos',
  templateUrl: './suplementos.component.html',
  styleUrls: ['./suplementos.component.scss']
})
export class SuplementosComponent implements OnInit {
 @Input() public suplementosList:any
  constructor() { }

  ngOnInit() {
  }

}
