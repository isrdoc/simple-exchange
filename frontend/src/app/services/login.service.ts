import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';

@Injectable()
export class LoginService {

  public loggedIn = false;
  public showLoginForm = false;

  public form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private data: DataService
  ) {
    this.form = builder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public toggleLoginProcess() {
    if (this.loggedIn) {
      return this.loggedIn = false;
    }

    this.showLoginForm = !this.showLoginForm;
  }

  public submitForm() {
    this.data.login(this.form.value);
/*
    this.user = this.form.value;
    this.loggedIn = true;
*/
    console.log('value', this.form.value);
  }

}

