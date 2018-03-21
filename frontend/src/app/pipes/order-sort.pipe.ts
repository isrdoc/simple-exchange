import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../components/box-orders/box-orders.component';

@Pipe({
  name: 'orderSort'
})
export class OrderSortPipe implements PipeTransform {

  transform(orders: Order[], direction: string): Order[] {
    const ordersSorted = orders.sort((a, b) => {
      if (a.limit < b.limit) { return direction === 'desc' ? 1 : -1; }
      if (a.limit > b.limit) { return direction === 'desc' ? -1 : 1; }
      return 0;
    });

    return ordersSorted;
  }

}
