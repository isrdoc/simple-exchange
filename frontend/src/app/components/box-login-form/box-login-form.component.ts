import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-box-login-form',
  templateUrl: './box-login-form.component.html',
  styleUrls: ['./box-login-form.component.scss']
})
export class BoxLoginFormComponent implements OnInit {

  private blurred: string;

  constructor(
    private login: LoginService,
    private data: DataService
  ) { }

  ngOnInit() {
  }

  onBlur(input) {
    this.blurred = input;
  }

}
