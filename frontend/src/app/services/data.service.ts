import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class DataService {

  private urlServer = 'http://localhost:6543';
  private urlLogin = '/login';

  private title: string;

  public authentication: Authentication = {
    authenticated: false,
    user: {
      name: ''
    }
  };

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
        this.authentication = result as Authentication;
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
  username: string;
  password: string;
}

export class User {
  name: string;
}

export class Authentication {
  authenticated: boolean;
  user: User;
}
