import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { ValidObject } from './validation.service';

@Injectable()
export class DataService {

  private urlServer = 'http://localhost:6543';
  private urlLogin = '/login';

  private title: string;

  public authentication: Authentication = new Authentication;

  constructor(private http: HttpClient) {
    this.getTitle();
  }

  private getTitle() {
    this.serverDataToLocalStorage('project');
  }

  public login(form) {
    const request: LoginRequest = {
      username: form.username,
      password: form.password
    };

    const subscription: Subscription = this.http.post(this.urlServer + this.urlLogin, request)
      .subscribe(result => {
        const userTypeCheck = new User(result['user'], new User());
        this.authentication = new Authentication(result, new Authentication());

        subscription.unsubscribe();
      });
  }

  // TODO: check this
  private serverDataToLocalStorage(field: string) {
    const subscription: Subscription = this.http.get(this.urlServer)
      .map(data => data ? data : null)
      .subscribe(result => {
        localStorage.setItem(field, result[field]);
        subscription.unsubscribe();
      });
  }

}


export class LoginRequest {
  username = '';
  password = '';
}

export class User extends ValidObject {
  name = '';

  constructor(object?, model?) {
    super(object, model);

    if (object) { this.overload(object, model); }
  }
}

export class Authentication extends ValidObject {
  authenticated = false;
  user: User = new User();

  constructor(object?, model?) {
    super(object, model);

    if (object) { this.overload(object, model); }
  }
}
