import { Component } from '@angular/core';
import { Balance } from '../box-balance/box-balance.component';
import { LoginService } from '../../services/login.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-page-sidebar',
  templateUrl: './page-sidebar.component.html',
  styleUrls: ['./page-sidebar.component.scss']
})
export class PageSidebarComponent {

  private balances: Balance[] = [
    {
      currency: 'BTC',
      amount: 3.5
    },
    {
      currency: 'ETH',
      amount: 0
    }
  ];

  constructor(
    private login: LoginService,
    private data: DataService
  ) {}

}
