import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PageSidebarComponent } from './components/page-sidebar/page-sidebar.component';
import { ViewMarketComponent } from './components/view-market/view-market.component';
import { ViewTransactionsComponent } from './components/view-transactions/view-transactions.component';
import { ViewTradeComponent } from './components/view-trade/view-trade.component';
import { BoxOrdersComponent } from './components/box-orders/box-orders.component';
import { OrderSortPipe } from './pipes/order-sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PageSidebarComponent,
    ViewMarketComponent,
    ViewTransactionsComponent,
    ViewTradeComponent,
    BoxOrdersComponent,
    OrderSortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
