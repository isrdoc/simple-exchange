import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class DataService {

  private urlServer = 'http://localhost:6543';

  private title: string;

  private loggedIn: boolean;
  private user: User;

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

    const subscription: Subscription = this.http.post(this.urlServer, request)
      .subscribe(result => {
        localStorage.setItem('authentication', JSON.stringify(result));
        subscription.unsubscribe();
      });

    console.log('localStorage', localStorage);

    // loggedIn
    // User
  }

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
