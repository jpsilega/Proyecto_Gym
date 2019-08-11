import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creatina-product-detail',
  templateUrl: './creatina-product-detail.component.html',
  styleUrls: ['./creatina-product-detail.component.scss']
})
export class CreatinaProductDetailComponent implements OnInit {
  public cantidadAComprar:number;
  public precio:number;
  public valorAPagar:number;
  constructor() {
    this.precio=10.55;
    this.valorAPagar=0;
  }

  ngOnInit() {
  }

  public calcularCantidad($event):any{
    this.cantidadAComprar=$event;
    if(this.cantidadAComprar>0)
      this.valorAPagar=this.precio*this.cantidadAComprar;
    else
    this.valorAPagar=0;
  }

}
