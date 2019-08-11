import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increase-decrease-quantity',
  templateUrl: './increase-decrease-quantity.component.html',
  styleUrls: ['./increase-decrease-quantity.component.scss']
})
export class IncreaseDecreaseQuantityComponent implements OnInit {

  public productCant:number;
  constructor() {
    this.productCant=0;
  }

  ngOnInit() {
  }

  increaseCantity():any{
    this.productCant+=1;

  }

  decreaseCantity():any{
    if(this.productCant>0)
     this.productCant-=1;
  }

}
