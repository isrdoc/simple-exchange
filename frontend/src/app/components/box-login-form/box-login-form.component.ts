import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-box-login-form',
  templateUrl: './box-login-form.component.html',
  styleUrls: ['./box-login-form.component.scss']
})
export class BoxLoginFormComponent implements OnInit {

  private blurred: string;

  constructor(private login: LoginService) { }

  ngOnInit() {
  }

  onBlur(input) {
    this.blurred = input;
  }

}
