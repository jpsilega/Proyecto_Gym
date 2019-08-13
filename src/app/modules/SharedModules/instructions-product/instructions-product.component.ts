import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instructions-product',
  templateUrl: './instructions-product.component.html',
  styleUrls: ['./instructions-product.component.scss']
})
export class InstructionsProductComponent implements OnInit {

  @Input() usageMode:string;
  constructor() {

  }

  ngOnInit() {
  }

}
