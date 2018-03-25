import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-page-sidebar',
  templateUrl: './page-sidebar.component.html',
  styleUrls: ['./page-sidebar.component.scss']
})
export class PageSidebarComponent {

  constructor(
    private login: LoginService,
    private data: DataService
  ) {}

}
