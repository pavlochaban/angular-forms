import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[passwordMatcher]',
  standalone: true,
  providers: [
    { provide: NG_VALIDATORS, useExisting: PasswordMatcherDirective, multi: true },
  ]
})
export class PasswordMatcherDirective implements Validator {

  private _error = { passwordMatcher: { mismatch: true } };

  validate(control: AbstractControl<string>): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password?.value || password?.value === confirmPassword?.value) {
      confirmPassword?.updateValueAndValidity({ emitEvent: false, onlySelf: true });
      return null;
    }

    confirmPassword?.setErrors(this._error);

    return this._error;
  }

}
