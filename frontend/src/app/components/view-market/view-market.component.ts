import { Component, OnInit } from '@angular/core';
import { Order } from '../box-orders/box-orders.component';

@Component({
  selector: 'app-view-market',
  templateUrl: './view-market.component.html',
  styleUrls: ['./view-market.component.scss']
})
export class ViewMarketComponent implements OnInit {

  private buying: Order[] = [
    {
      limit: 0.07,
      amount: 2
    },
    {
      limit: 0.08,
      amount: 1
    }
  ];

  private selling: Order[] = [
    {
      limit: 0.09,
      amount: 1
    },
    {
      limit: 0.08,
      amount: 0.5
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
