import { Component } from '@angular/core';

@Component({
  selector: 'phone-number',
  templateUrl: 'phone-number.html'
})
export class PhoneNumberComponent {

  text: string;

  constructor() {
    console.log('Hello PhoneNumberComponent Component');
    this.text = 'Hello World';
  }

}
