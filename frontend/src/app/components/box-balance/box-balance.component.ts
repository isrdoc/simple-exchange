import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-balance',
  templateUrl: './box-balance.component.html',
  styleUrls: ['./box-balance.component.scss']
})
export class BoxBalanceComponent implements OnInit {

  @Input() balances: Balance[];

  constructor() { }

  ngOnInit() {
  }

}


export class Balance {
  currency: string;
  amount: number;
}
