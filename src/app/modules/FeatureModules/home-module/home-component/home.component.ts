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

  planes: Plan[] = [
    {
      meses: "1 month",
      precio: 29,
      swimming_pool: "not included",
      canteen: "optional",
      towels: "not included",
      water:"not included",
      personal_trainer: "not included"
    },
    {
      meses: "3 months",
      precio: 49,
      swimming_pool: "not included",
      canteen: "optional",
      towels: "optional",
      water:"optional",
      personal_trainer: "not included"
    },
    {
      meses: "6 months",
      precio: 69,
      swimming_pool: "+ $10",
      canteen: "optional",
      towels: "for FREE",
      water:"+ $5",
      personal_trainer: "optional"
    },
    {
      meses: "1 year",
      precio: 99,
      swimming_pool: "for FREE",
      canteen: "included",
      towels: "for FREE",
      water:"for FREE",
      personal_trainer: "included"
    }
  ];




  numbers: Numbers[] = [
    {
      img: "assets/img/home_gym_counter_1.png",
      number: 1452,
      title: "Happy gym users"      
    },
    {
      img: "assets/img/home_gym_counter_2.png",
      number: 350,
      title: "Square metters of space"
    },
    {
      img: "assets/img/home_gym_counter_3.png",
      number: 12,
      title: "Instructors"
    },
    {
      img: "assets/img/home_gym_counter_4.png",
      number: 7,
      title: "Days a week"
    }
  ];


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
