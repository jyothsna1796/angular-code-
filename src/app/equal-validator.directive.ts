
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';
@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EqualValidatorDirective,
        multi: true
    }]
})
export class EqualValidatorDirective implements Validator{
 @Input() appConfirmEqualValidator: string;
    validate(control : AbstractControl):{ [key: string]: any} | null {
        const pswd = control.parent.get(this.appConfirmEqualValidator);
        if(pswd&& pswd.value !== control.value){
        return { 'notEqual': true};
    }
        return null;
}
}