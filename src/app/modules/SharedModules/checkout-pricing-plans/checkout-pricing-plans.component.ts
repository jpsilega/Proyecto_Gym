import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-pricing-plans',
  templateUrl: './checkout-pricing-plans.component.html',
  styleUrls: ['./checkout-pricing-plans.component.scss']
})
export class CheckoutPricingPlansComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  planes: any[] = [
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
}
