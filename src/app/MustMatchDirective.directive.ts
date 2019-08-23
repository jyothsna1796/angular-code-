import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';



@Directive({
    selector: '[appPassword]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: MustMatchDirective,
        multi: true
    }]
})
export class MustMatchDirective implements Validator {
    @Input() appPassword: string[] = [];

    validate(control: AbstractControl): ValidationErrors {
        const pswd = control.get(this.appPassword[0]),
         cpswd = control.get(this.appPassword[1]);
        //both fields are empty
        if (!pswd || !cpswd) {
            return null;
        }
        if (cpswd.errors && !cpswd.errors.mustMatch) {
            return null;
        }

        if (pswd.value !== cpswd.value) {
            cpswd.setErrors({ mustMatch: true });
        }
        else {
            cpswd.setErrors(null);
        }
    }
}