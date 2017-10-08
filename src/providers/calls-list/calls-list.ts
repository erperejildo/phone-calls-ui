import { Injectable } from '@angular/core';

@Injectable()
export class CallsListProvider {
  number: string = '';
  calling: boolean;
  timeCounter: number;
  timeInterval: any;
  totalCalls: number = 0;
  tempList: any = [];
  list: any = [];

  constructor() {
  }

  dial() {
    this.calling = true;
    this.totalCalls = this.totalCalls + 1;
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
    // avoids arrays large as a mobile number but keeping the number for indexing
    const pos = '.' + this.number;

    // checks if we already have the number to increment the calls
    if (typeof(this.tempList[pos]) === 'undefined') {
      this.tempList[pos] = 1;
    } else {
      this.tempList[pos] = this.tempList[pos] + 1;
    }

    // prepares the list on an array of objects for an easier reading for Angular
    this.list = [];
    for (let prop in this.tempList) {
      this.list.push({
        number: prop.replace('.', ''),
        totalCalls: this.tempList[prop]
      });
    }
  }

}
