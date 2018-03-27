import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';

@Injectable()
export class DepositService {

  public form: FormGroup;

  public currencies: Currency[] = [
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

  constructor(
    private builder: FormBuilder,
    private data: DataService
  ) {
    this.form = builder.group({
      currency: [this.currencies[0], Validators.required],
      amount: [1, Validators.required]
    });

    this.form.controls['currency'].setValue(this.currencies[0], {onlySelf: true});
  }

  public submitForm() {
    this.data.deposit(this.form.value);
  }

}


export class Currency {
  name: string;
  alias: string;
  symbol: string;
}
