import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-page-sidebar',
  templateUrl: './page-sidebar.component.html',
  styleUrls: ['./page-sidebar.component.scss']
})
export class PageSidebarComponent implements OnInit, OnDestroy {

  private title: string;
  private subscription: Subscription;
  private urlServer = 'http://localhost:6543';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTitle();
  }

  getTitle() {
    this.subscription = this.http.get(this.urlServer)
      .map(data => data ? data : null)
      .subscribe(result => this.title = result['project']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
