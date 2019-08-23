import { AbstractControl } from '@angular/forms';

// tslint:disable-next-line: no-unused-expression
export function PasswordValidator(control: AbstractControl)  {
    if (control && (control.value) !== null || (control.value) !== undefined) {
      const cnfpswd = control.value;
  
      const passcontrol = control.root.get('password');
      if (passcontrol) {
        const passvalue = passcontrol.value;
        if (passvalue !== cnfpswd || passvalue === "") {
          return {
            isError: true
          };
        }
      }
    }
    return null;
  }
