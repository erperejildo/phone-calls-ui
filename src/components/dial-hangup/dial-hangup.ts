import { Component } from '@angular/core';
import { CallsListProvider } from '../../providers/calls-list/calls-list';

@Component({
  selector: 'dial-hangup',
  templateUrl: 'dial-hangup.html'
})
export class DialHangupComponent {
  calling: boolean;

  constructor(public callsListProvider: CallsListProvider) {
  }

  dial() {
    this.callsListProvider.dial();
  }

  hangup() {
    this.callsListProvider.hangup();
  }
}
