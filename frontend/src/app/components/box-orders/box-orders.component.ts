import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-orders',
  templateUrl: './box-orders.component.html',
  styleUrls: ['./box-orders.component.scss']
})
export class BoxOrdersComponent implements OnInit {

  @Input() title: string;
  @Input() orders: Order[];

  constructor() { }

  ngOnInit() {
  }

}


export class Order {
  limit: number;
  amount: number;
}
