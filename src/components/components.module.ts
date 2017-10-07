import { NgModule } from '@angular/core';
import { PhoneNumberComponent } from './phone-number/phone-number';
import { DialHangupComponent } from './dial-hangup/dial-hangup';
import { KeyboardComponent } from './keyboard/keyboard';
@NgModule({
	declarations: [
	    PhoneNumberComponent,
        DialHangupComponent,
        KeyboardComponent
    ],
	imports: [],
	exports: [
	    PhoneNumberComponent,
        DialHangupComponent,
        KeyboardComponent
    ]
})
export class ComponentsModule {}
