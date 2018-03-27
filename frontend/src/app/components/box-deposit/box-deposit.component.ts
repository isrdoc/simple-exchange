import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { DepositService } from '../../services/deposit.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-box-deposit',
  templateUrl: './box-deposit.component.html',
  styleUrls: ['./box-deposit.component.scss']
})
export class BoxDepositComponent implements OnInit {

  private amount;

  constructor(
    private decimal: DecimalPipe,
    private deposit: DepositService,
    private data: DataService
  ) { }

  ngOnInit() {
  }

  onChange(value) {
    this.amount = value;
  }

}
