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
  public uso:string;


  constructor() {
    this.precio=10.55;
    this.valorAPagar=0;
    this.uso="Mezclar 1,5 cucharadas (aproximadamente 5 g) con 50 ml de agua. Se recomienda una o dos tomas diarias. Una toma puede acompañarse de su batido pre o post-entrenamiento.";
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
