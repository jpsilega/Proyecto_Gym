import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creatina-product',
  templateUrl: './creatina-product.component.html',
  styleUrls: ['./creatina-product.component.scss']
})
export class CreatinaProductComponent implements OnInit {

  @Input() public productCreatinaList:any
  constructor() { }

  ngOnInit() {
  }

}
