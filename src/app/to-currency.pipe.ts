// Pipe for transforming the currency indexes to actuall currency chars

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCurrency'
})
export class ToCurrencyPipe implements PipeTransform {

  currencies = ['₪', '$', '£', '€'];

  transform(value: number): any {
    return this.currencies[value];
  }

}
