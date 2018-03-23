import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-box-deposit',
  templateUrl: './box-deposit.component.html',
  styleUrls: ['./box-deposit.component.scss']
})
export class BoxDepositComponent implements OnInit {

  private currencies: Currency[] = [
    {
      name: 'Bitcoin',
      alias: 'BTC',
      symbol: 'B'
    },
    {
      name: 'Etherium',
      alias: 'ETH',
      symbol: 'E'
    }
  ];

  private submitted = false;

  private deposit: Deposit = {
    currency: this.currencies[0],
    amount: '1.00000'
  };

  constructor(private decimal: DecimalPipe) { }

  ngOnInit() {
  }

  onChange(value) {
    this.deposit.amount = value;
    this.submitted = false;

    console.log('deposit', JSON.stringify(this.deposit));
  }

  onSubmit(event) {
    this.submitted = true;
  }

}


export class Currency {
  name: string;
  alias: string;
  symbol: string;
}

export class Deposit {
  currency: Currency;
  amount: number|string;
}
