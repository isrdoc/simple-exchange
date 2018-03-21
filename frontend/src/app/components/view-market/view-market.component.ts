import { Component, OnInit } from '@angular/core';
import { Order } from '../box-orders/box-orders.component';

@Component({
  selector: 'app-view-market',
  templateUrl: './view-market.component.html',
  styleUrls: ['./view-market.component.scss']
})
export class ViewMarketComponent implements OnInit {

  private buying: Order[] = [{
    limit: 0.07,
    amount: 10
  }];

  private selling: Order[] = [{
    limit: 0.09,
    amount: 5
  }];

  constructor() { }

  ngOnInit() {
  }

}
