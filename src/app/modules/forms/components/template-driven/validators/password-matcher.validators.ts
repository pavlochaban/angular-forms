import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { PasswordMatcher } from '@modules/forms/validators/password-matcher.validators';

@Directive({
  selector: '[passwordMatcher]',
  standalone: true,
  providers: [
    { provide: NG_VALIDATORS, useExisting: PasswordMatcherDirective, multi: true },
  ]
})
export class PasswordMatcherDirective implements Validator {

  validate(control: AbstractControl<string>): ValidationErrors | null {
    return PasswordMatcher(control);
  }

}
