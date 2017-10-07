import { Component } from '@angular/core';
import { CallsListProvider } from '../../providers/calls-list/calls-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public callsListProvider: CallsListProvider) {
  }

}
