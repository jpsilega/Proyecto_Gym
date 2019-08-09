import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym-number-dashboard',
  templateUrl: './gym-number-dashboard.component.html',
  styleUrls: ['./gym-number-dashboard.component.scss']
})
export class GymNumberDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  numbers: any[] = [
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
