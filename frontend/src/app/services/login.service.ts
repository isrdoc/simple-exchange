import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';

@Injectable()
export class LoginService {

  // TOOD: fix to this.data.authentication.authenticated
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
    if (this.data.authentication.authenticated) {
      this.data.logout();
      this.showLoginForm = false;
      return;
    }

    this.showLoginForm = !this.showLoginForm;
  }

  public submitForm() {
    this.data.login(this.form.value);
  }

}
