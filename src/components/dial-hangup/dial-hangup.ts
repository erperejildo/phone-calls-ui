import { Component } from '@angular/core';

@Component({
  selector: 'dial-hangup',
  templateUrl: 'dial-hangup.html'
})
export class DialHangupComponent {

  text: string;

  constructor() {
    console.log('Hello DialHangupComponent Component');
    this.text = 'Hello World';
  }

}
