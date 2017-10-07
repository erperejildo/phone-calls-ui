import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CallsListProvider {
  number: string = '';
  calling: boolean;
  timeCounter: number;
  timeInterval: any;

  constructor() {
  }

  dial() {
    this.calling = true;

    this.timeCounter = 0;
    this.timeInterval = setInterval(() => {
      this.timeCounter++;
      if (this.timeCounter === 11) {
        this.hangup();
      }
    }, 1000);
  }

  hangup() {
    this.calling = false;
    this.number = '';

    clearInterval(this.timeInterval);
  }

}
