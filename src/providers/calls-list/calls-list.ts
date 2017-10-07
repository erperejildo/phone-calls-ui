import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CallsListProvider {
  number: string = '';
  calling: boolean;

  constructor() {
    console.log('Hello CallsListProvider Provider');
  }

}
