import { Component } from '@angular/core';
import { CallsListProvider } from '../../providers/calls-list/calls-list';

@Component({
  selector: 'phone-number',
  templateUrl: 'phone-number.html'
})
export class PhoneNumberComponent {

  constructor(public callsListProvider: CallsListProvider) {
    console.log(callsListProvider);
  }

}
