import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-plan-precios',
  templateUrl: './plan-precios.component.html',
  styleUrls: ['./plan-precios.component.scss']
})
export class PlanPreciosComponent implements OnInit {
  @Input() plan : any = {};


  constructor( ) { }

  ngOnInit() {
 
  }

}
