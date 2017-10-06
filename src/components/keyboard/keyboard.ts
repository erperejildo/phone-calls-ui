import { Component } from '@angular/core';

/**
 * Generated class for the KeyboardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'keyboard',
  templateUrl: 'keyboard.html'
})
export class KeyboardComponent {

  text: string;

  constructor() {
    console.log('Hello KeyboardComponent Component');
    this.text = 'Hello World';
  }

}
