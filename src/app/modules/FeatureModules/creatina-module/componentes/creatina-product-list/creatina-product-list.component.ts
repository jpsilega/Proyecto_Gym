import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creatina-product-list',
  templateUrl: './creatina-product-list.component.html',
  styleUrls: ['./creatina-product-list.component.scss']
})
export class CreatinaProductListComponent implements OnInit {

  creatinaList:any []
  constructor() {
    this.creatinaList=new Array();
    let item1={
      id:"1",
      img:"../../../../../../assets/img/suplementos/creatina/creatina1.jpg",
      productName:"Creatina Monohidratada Creapure®",
      price:"10.50"
    };
    let item2={
      id:"2",
      img:"../../../../../../assets/img/suplementos/creatina/creatian2.jpg",
      productName:"Creatina Monohidratada Creapure®",
      price:"10.50"
    };
    let item3={
      id:"3",
      img:"../../../../../../assets/img/suplementos/creatina/creatian3.jpg",
      productName:"Creatina Monohidratada Creapure®",
      price:"10.50"
    };
    let item4={
      id:"4",
      img:"../../../../../../assets/img/suplementos/creatina/creatina4.jpg",
      productName:"Creatina Monohidratada Creapure®",
      price:"10.50"
    };
    let item5={
      id:"5",
      img:"../../../../../../assets/img/suplementos/creatina/creatina5.jpg",
      productName:"Creatina Monohidratada Creapure®",
      price:"10.50"
    };
    let item6={
      id:"6",
      img:"../../../../../../assets/img/suplementos/creatina/creatina6.jpg",
      productName:"Creatina Monohidratada Creapure®",
      price:"10.50"
    };

    this.creatinaList.push(item1);
    this.creatinaList.push(item2);
    this.creatinaList.push(item3);
    this.creatinaList.push(item4);
    this.creatinaList.push(item5);
    this.creatinaList.push(item6);
  }

  ngOnInit() {
  }

}
