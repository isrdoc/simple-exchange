import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { ValidObject } from './validation.service';

@Injectable()
export class DataService {

  private urlServer = 'http://localhost:6543';
  private urlLogin = '/login';
  private urlLogout = '/logout';

  public title: string;
  public authentication: Authentication;

  constructor(private http: HttpClient) {
    this.getTitle();
    this.getAuthentication();
  }

  /* Page */
  private getTitle() {
    this.serverDataToLocalStorage('project');
  }

  // TODO: check this
  private serverDataToLocalStorage(field: string) {
    const subscription: Subscription = this.http.get(this.urlServer, { withCredentials: true })
      .map(data => data ? data : null)
      .subscribe(result => {
        localStorage.setItem(field, result[field]);
        subscription.unsubscribe();
      });
  }

  /* Authentication */
  private getAuthentication() {
    const localAuthentication =  JSON.parse(localStorage.getItem('authentication'));
    const userTypeCheck = new User(localAuthentication['user'], new User());

    this.authentication = new Authentication(localAuthentication, new Authentication());
  }

  public login(form) {
    const request: LoginRequest = {
      username: form.username,
      password: form.password
    };

    const subscription: Subscription = this.http.post(this.urlServer + this.urlLogin, request, { withCredentials: true })
      .subscribe(result => {
        this.checkAndSetAuthentication(result);
        subscription.unsubscribe();
      });
  }

  public logout() {
    const subscription: Subscription = this.http.get(this.urlServer + this.urlLogout, { withCredentials: true })
      .map(data => data ? data : null)
      .subscribe(result => {
        this.checkAndSetAuthentication(result);
        subscription.unsubscribe();
      });
  }

  private checkAndSetAuthentication(result) {
    const userTypeCheck = new User(result['user'], new User());
    this.authentication = new Authentication(result, new Authentication());

    localStorage.setItem('authentication', JSON.stringify(this.authentication));
  }

  /* END Authentication */

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
