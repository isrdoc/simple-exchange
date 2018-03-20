import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private title: string;
  private subscription: Subscription;
  private urlServer = 'http://localhost:6543';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.subscription = this.http.get(this.urlServer)
      .map(data => data ? data : null)
      .subscribe(result => this.title = result['project']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
