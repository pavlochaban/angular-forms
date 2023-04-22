import { AbstractControl, ValidationErrors } from "@angular/forms";

const _error = { passwordMatcher: { mismatch: true } };
export function PasswordMatcher(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password?.value || password?.value === confirmPassword?.value) {
      confirmPassword?.updateValueAndValidity({ emitEvent: false, onlySelf: true });
      return null;
    }

    confirmPassword?.setErrors(_error);

    return _error;
}
