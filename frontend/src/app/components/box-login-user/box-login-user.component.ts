import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-box-login-user',
  templateUrl: './box-login-user.component.html',
  styleUrls: ['./box-login-user.component.scss']
})
export class BoxLoginUserComponent implements OnInit {

  constructor(private login: LoginService) { }

  ngOnInit() {
  }

}
