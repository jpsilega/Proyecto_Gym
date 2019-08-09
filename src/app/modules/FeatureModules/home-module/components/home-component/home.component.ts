import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }







}


export interface Plan {
  meses: string;
  precio: number,
  swimming_pool: string;
  canteen: string;
  towels: string;
  water: string;
  personal_trainer: string;
  idx?: number;
}



export interface Numbers {
  img: string;
  number: number,
  title: string
  idx?: number;
}
