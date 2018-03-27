import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { ValidatedObject } from './validation.service';

@Injectable()
export class DataService {

  private urlServer = 'http://localhost:6543';
  private urlLogin = '/login';
  private urlLogout = '/logout';
  private urlBalances = '/account/balances';
  private urlDeposit = '/account/deposit';

  public title: string;
  public authentication: Authentication;
  public balances: Balance[];


  constructor(private http: HttpClient) {
    this.getTitle();
    this.getAuthentication();
    this.getBalances(true);
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
    const localAuthentication = JSON.parse(localStorage.getItem('authentication'));

    if (localAuthentication.authenticated && localAuthentication.user) {
      const userTypeCheck = new User(localAuthentication['user'], new User());
      this.authentication = new Authentication(localAuthentication, new Authentication());
      return;
    }

    this.authentication = new Authentication();
  }

  public login(form) {
    const request: LoginRequest = {
      username: form.username,
      password: form.password
    };

    // reset loginFailed on new login attempt
    this.authentication = new Authentication();
    localStorage.setItem('authentication', JSON.stringify(this.authentication));

    const subscription: Subscription = this.http.post(this.urlServer + this.urlLogin, request, { withCredentials: true })
      .subscribe(result => {
        const LoginResponseCheck = new LoginResponse(result, new LoginResponse());

        if (result['authenticated'] && result['user']) {
          const userTypeCheck = new User(result['user'], new User());
          this.authentication = new Authentication(result, new Authentication());
        } else {
          this.authentication = new Authentication({ loginFailed: true });
        }

        localStorage.setItem('authentication', JSON.stringify(this.authentication));
        this.getBalances();

        subscription.unsubscribe();
      });
  }

  public logout() {
    const subscription: Subscription = this.http.get(this.urlServer + this.urlLogout, { withCredentials: true })
      .map(data => data ? data : null)
      .subscribe(result => {
        const LogoutResponseCheck = new LogoutResponse(result, new LogoutResponse());

        this.authentication = new Authentication();
        localStorage.setItem('authentication', JSON.stringify(this.authentication));

        this.getBalances();

        subscription.unsubscribe();
      });
  }


  /* Balances */
  private getBalances(useCache = false) {
    const localBalances = JSON.parse(localStorage.getItem('balances'));
    const localAuthentication = JSON.parse(localStorage.getItem('authentication'));

    if (!localAuthentication.authenticated) {
      this.balances = [];
      return;
    }

    if (!this.balances) {
      this.balances = [];
    }

    if (localBalances && localAuthentication.authenticated && useCache) {
      this.balances = localBalances.filter(balance => {
        const balanceCheck = new Balance(balance, new Balance());

        return balance;
      });

      return;
    }

    const subscription: Subscription = this.http.get(this.urlServer + this.urlBalances, { withCredentials: true })
      .map(data => data ? data : null)
      .subscribe(result => {
        const balancesResponseCheck = new BalancesResponse(result, new BalancesResponse());

        this.balances = result['balances'].filter(balance => balance).map(balance => {
          const balanceCheck = new Balance(balance, new Balance());

          return balance;
        });

        localStorage.setItem('balances', JSON.stringify(this.balances));

        subscription.unsubscribe();
      });
  }

  deposit(form) {
    const request: DepositRequest = {
      currency: form.currency,
      amount: form.amount
    };

    const subscription: Subscription = this.http.post(this.urlServer + this.urlDeposit, request, { withCredentials: true })
      .map(data => data ? data : null)
      .subscribe(result => {
        const depositResponseCheck = new DepositResponse(result, new DepositResponse());

        console.log('deposit', result);

        if (result['deposit_successful']) {
          this.getBalances();
        }

        subscription.unsubscribe();
      });
  }

}


/* Authentication */
export class LoginRequest {
  username = '';
  password = '';
}

export class LoginResponse extends ValidatedObject {
  authenticated = false;

  constructor(object?, model?) {
    super(object, model);

    if (object && model) { this.overload(object); }
  }
}

export class LogoutResponse extends ValidatedObject {
  authenticated = false;

  constructor(object?, model?) {
    super(object, model);

    if (object && model) { this.overload(object); }
  }
}


export class User extends ValidatedObject {
  name = '';

  constructor(object?, model?) {
    super(object, model);

    if (object && model) { this.overload(object); }
  }
}

export class Authentication extends ValidatedObject {
  authenticated = false;
  loginFailed?: boolean;
  user: User = new User();

  constructor(object?, model?) {
    super(object, model);

    if (object) { this.overload(object); }
  }
}


/* Balances */
export class DepositRequest {
  currency = '';
  amount = 0;
}

export class DepositResponse extends ValidatedObject {
  success = false;

  constructor(object?, model?) {
    super(object, model);

    if (object && model) { this.overload(object); }
  }
}

export class Balance extends ValidatedObject {
  currency = '';
  amount = 0;

  constructor(object?, model?) {
    super(object, model);

    if (object && model) { this.overload(object); }
  }
}

export class BalancesResponse extends ValidatedObject {
  balances: Balance[] = [];

  constructor(object?, model?) {
    super(object, model);

    if (object && model) { this.overload(object); }
  }
}
