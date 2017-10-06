import { NgModule } from '@angular/core';
import { PhoneNumberComponent } from './phone-number/phone-number';
import { DialHangupComponent } from './dial-hangup/dial-hangup';
import { NumbersComponent } from './numbers/numbers';
import { KeyboardComponent } from './keyboard/keyboard';
@NgModule({
	declarations: [PhoneNumberComponent,
    DialHangupComponent,
    NumbersComponent,
    KeyboardComponent],
	imports: [],
	exports: [PhoneNumberComponent,
    DialHangupComponent,
    NumbersComponent,
    KeyboardComponent]
})
export class ComponentsModule {}
