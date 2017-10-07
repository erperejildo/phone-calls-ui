import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CallsListProvider {
  prueba: string = 'hoollla';

  constructor() {
    console.log('Hello CallsListProvider Provider');
  }

}
