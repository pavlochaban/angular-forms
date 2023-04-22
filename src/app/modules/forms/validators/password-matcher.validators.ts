import { AbstractControl, ValidationErrors } from "@angular/forms";

export function PasswordMatcher(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password?.value || password?.value === confirmPassword?.value) {
    confirmPassword?.updateValueAndValidity({ emitEvent: false, onlySelf: true });
    return null;
  }

  const _error = { passwordMatcher: { mismatch: true } };

  confirmPassword?.setErrors(_error);

  return _error;
}
