import { Component } from '@angular/core';
import { CallsListProvider } from '../../providers/calls-list/calls-list';

@Component({
  selector: 'keyboard',
  templateUrl: 'keyboard.html'
})
export class KeyboardComponent {

  constructor(public callsListProvider: CallsListProvider) {
  }

  addNumber(number) {
    this.callsListProvider.number = this.callsListProvider.number + number.target.innerText;
  }

}
