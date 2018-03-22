import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class LoginService {

  public loggedIn = false;
  public showLoginForm = false;

  public user: User = {
    username: 'trader1',
    password: 'itrade'
  };

  public form: FormGroup;

  constructor(builder: FormBuilder) {
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
    this.user = this.form.value;
    this.loggedIn = true;

    console.log('value', this.form.value);
  }

}


export class User {
  username: string;
  password: string;
}
