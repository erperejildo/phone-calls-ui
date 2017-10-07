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
  }

  addCallToList() {
    if (typeof(this.list[this.number]) === 'undefined') {
      this.list[this.number] = 0;
    } else {
      this.list[this.number] = this.list[this.number] + 1;
    }
  }

}
