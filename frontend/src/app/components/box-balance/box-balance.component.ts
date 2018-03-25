import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Balance } from '../../services/data.service';

@Component({
  selector: 'app-box-balance',
  templateUrl: './box-balance.component.html',
  styleUrls: ['./box-balance.component.scss']
})
export class BoxBalanceComponent implements OnInit {

  @Input() balances: Balance[];

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
