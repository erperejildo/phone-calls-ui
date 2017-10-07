import { Component } from '@angular/core';
import { CallsListProvider } from '../../providers/calls-list/calls-list';

@Component({
  selector: 'phone-number',
  templateUrl: 'phone-number.html'
})
export class PhoneNumberComponent {

  text: string;

  constructor(public callsListProvider: CallsListProvider) {
    console.log(callsListProvider);
    console.log('Hello PhoneNumberComponent Component');
    this.text = 'Hello World';
  }

}
