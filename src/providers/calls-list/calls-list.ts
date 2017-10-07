import { Injectable } from '@angular/core';

@Injectable()
export class CallsListProvider {
  number: string = '';
  calling: boolean;
  timeCounter: number;
  timeInterval: any;
  list: any = [];

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
    this.addCallToList();
    this.calling = false;
    this.number = '';
    clearInterval(this.timeInterval);
    console.log(this.list);
  }

  addCallToList() {
    const pos = '.' + this.number; // avoid arrays large as a mobile number but keeping the number

    if (typeof(this.list[pos]) === 'undefined') {
      this.list[pos] = 1;
    } else {
      this.list[pos] = this.list[pos] + 1;
    }
  }

}
