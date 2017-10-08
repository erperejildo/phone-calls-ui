import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByNumber',
})
export class OrderByNumberPipe implements PipeTransform {

  transform(array) {
    return array.sort(function(a, b){
      return b.totalCalls - a.totalCalls
    }).slice(0, 3); // we only want the 3 most called ones
  }

}