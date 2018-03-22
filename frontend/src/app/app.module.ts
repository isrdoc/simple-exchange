import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginService } from './services/login.service';
import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { PageSidebarComponent } from './components/page-sidebar/page-sidebar.component';
import { ViewMarketComponent } from './components/view-market/view-market.component';
import { ViewTransactionsComponent } from './components/view-transactions/view-transactions.component';
import { ViewTradeComponent } from './components/view-trade/view-trade.component';
import { BoxOrdersComponent } from './components/box-orders/box-orders.component';
import { OrderSortPipe } from './pipes/order-sort.pipe';
import { BoxBalanceComponent } from './components/box-balance/box-balance.component';
import { BoxDepositComponent } from './components/box-deposit/box-deposit.component';
import { BoxLoginUserComponent } from './components/box-login-user/box-login-user.component';
import { BoxLoginFormComponent } from './components/box-login-form/box-login-form.component';
import { BoxOrderPlaceComponent } from './components/box-order-place/box-order-place.component';


@NgModule({
  declarations: [
    AppComponent,
    PageSidebarComponent,
    ViewMarketComponent,
    ViewTransactionsComponent,
    ViewTradeComponent,
    BoxOrdersComponent,
    OrderSortPipe,
    BoxBalanceComponent,
    BoxDepositComponent,
    BoxLoginUserComponent,
    BoxLoginFormComponent,
    BoxOrderPlaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DecimalPipe,
    LoginService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
